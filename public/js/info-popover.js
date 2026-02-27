(function () {
	function closeAll() {
		document.querySelectorAll(".info-popover.active").forEach(function (pop) {
			pop.classList.remove("active");
			var btn = pop.previousElementSibling;
			if (btn && btn.classList.contains("info-btn")) {
				btn.setAttribute("aria-expanded", "false");
			}
		});
	}

	document.addEventListener("click", function (e) {
		var btn = e.target.closest(".info-btn");
		if (btn) {
			e.stopPropagation();
			var popover = btn.nextElementSibling;
			var isOpen = popover.classList.contains("active");
			closeAll();
			if (!isOpen) {
				popover.classList.add("active");
				btn.setAttribute("aria-expanded", "true");
			}
			return;
		}

		if (!e.target.closest(".info-popover")) {
			closeAll();
		}
	});

	document.addEventListener("keydown", function (e) {
		if (e.key === "Escape") {
			closeAll();
		}
	});
})();
