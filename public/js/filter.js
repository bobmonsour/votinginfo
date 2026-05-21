(function () {
	const searchInput = document.getElementById("state-search");
	const filterBtns = document.querySelectorAll(".filter-btn[data-filter]");
	const cards = document.querySelectorAll(".state-card");
	const countEl = document.getElementById("visible-count");
	const emptyState = document.getElementById("empty-state");
	const clearBtn = document.getElementById("clear-filters");
	const jumpRail = document.querySelector(".inline-rail");

	if (!searchInput || !cards.length) return;

	let debounceTimer;
	const activeFilters = new Set();

	function updateVisibility() {
		const query = searchInput.value.trim().toLowerCase();
		let visible = 0;

		cards.forEach(function (card) {
			const name = card.getAttribute("data-state") || "";
			const abbr = card.getAttribute("data-abbr") || "";
			const matchesSearch =
				!query || name.includes(query) || abbr.includes(query);

			let matchesFilters = true;
			activeFilters.forEach(function (filter) {
				if (card.getAttribute("data-" + filter) !== "true") {
					matchesFilters = false;
				}
			});

			if (matchesSearch && matchesFilters) {
				card.hidden = false;
				visible++;
			} else {
				card.hidden = true;
			}
		});

		if (countEl) countEl.textContent = visible;
		if (emptyState) emptyState.hidden = visible !== 0;

		// Hide the "Jump to a state" rail when a search or filter is active —
		// it doesn't reflect the filtered set and adds visual noise between
		// the search box and the matching cards.
		const filtering = query !== "" || activeFilters.size > 0;
		if (jumpRail) {
			if (filtering && !jumpRail.hidden && jumpRail.contains(document.activeElement)) {
				document.activeElement.blur();
			}
			jumpRail.hidden = filtering;
		}
	}

	searchInput.addEventListener("input", function () {
		clearTimeout(debounceTimer);
		debounceTimer = setTimeout(updateVisibility, 250);
	});

	filterBtns.forEach(function (btn) {
		btn.addEventListener("click", function () {
			const filter = btn.getAttribute("data-filter");
			const pressed = btn.getAttribute("aria-pressed") === "true";

			if (pressed) {
				activeFilters.delete(filter);
				btn.setAttribute("aria-pressed", "false");
			} else {
				activeFilters.add(filter);
				btn.setAttribute("aria-pressed", "true");
			}

			updateVisibility();
		});
	});

	if (clearBtn) {
		clearBtn.addEventListener("click", function () {
			searchInput.value = "";
			activeFilters.clear();
			filterBtns.forEach(function (btn) {
				btn.setAttribute("aria-pressed", "false");
			});
			updateVisibility();
		});
	}

})();
