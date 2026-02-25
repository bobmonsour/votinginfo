(function () {
	const searchInput = document.getElementById("state-search");
	const filterBtns = document.querySelectorAll(".filter-btn");
	const cards = document.querySelectorAll(".state-card");
	const countEl = document.getElementById("visible-count");

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

})();
