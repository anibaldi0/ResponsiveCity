  
		var now = new Date().getHours();

		/**
		 * Adjust the color theme based on time
		 */
		function adjustColorMode() {
            var css=document.getElementById("css")


			// If it's nighttime, go dark mode
			if (now > 6 && now < 19) {
                css.setAttribute("href", "/css/style.css");
				return;
			} else {
                css.setAttribute("href", "/css/nightmode.css");
            }
		};

		// /**
		//  adjust the color palette
		//  */
		var updateUI = function () {

			// Update color palette
			adjustColorMode();

		}

		// Update the UI on page load
		updateUI();

		// Check again every 15 minutes
		setInterval(function () {
			now = new Date().getHours();
			updateUI();
		}, 1000 * 60 * 1);