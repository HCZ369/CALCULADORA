window.addEventListener("load", () => {
	/* escuchamos cuando se carga el documento */
	/* Creamos dos constantes y guardamos los elementos que necesitamos */
	const display = document.querySelector(".calculator-display");
	const keypadButtons = document.getElementsByClassName("keypad-button");
	/* Creamos una constante para convertir el HTMLCollection a Array */
	const keypadButtonsArray = Array.from(keypadButtons);
	/* Iteramos por nuestro nuevo array de botones */
	keypadButtonsArray.forEach((button) => {
		/* Llamamos a una funcion cada vez que ocurra un click */
		button.addEventListener("click", () => {
			calculadora(button, display);
		});
	});
});
function calculadora(button, display) {
	switch (button.innerHTML) {
		case "CA":
			borrar(display);
			break;

		case "=":
			calcular(display);
			break;
		case ",":
			addComa(display);
			break;

		default:
			actualizar(display, button);
			break;
	}
}
function calcular(display) {
	display.innerHTML = eval(display.innerHTML);
}
function actualizar(display, button) {
	if (display.innerHTML == 0) {
		display.innerHTML = "";
	}
	display.innerHTML += button.innerHTML; /* agrega el valor del boton a la pantalla */
}
function borrar(display) {
	display.innerHTML = 0;
}

function addComa() {
	if (keypadButtons == "") {
		document.getElementById("total").innerHTML = "0.";
	} else if (!keypadButtons.includes(".")) {
		document.getElementById("total").innerHTML += ".";
	}
}
