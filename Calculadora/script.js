let calculation = "";
		let display = document.getElementById("display");

		function updateDisplay(value) {
			calculation += value;
			display.value = calculation;
		}

		function calculate() {
			display.value = eval(calculation);
		}

		function clearDisplay() {
			calculation = "";
			display.value = "";
		}