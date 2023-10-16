
// Exercise 6

function validate() {
	var error = 0;

	// Get the input fields
	var fName = document.getElementById("fName");
	var fLastN = document.getElementById("fLastN");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorLastN = document.getElementById("errorLastN");
	var errorEmail = document.getElementById("errorEmail");
	var errorAddress = document.getElementById("errorAddress");
	var errorPassword = document.getElementById("errorPassword");
	var errorPhone = document.getElementById("errorPhone");

	// Elimina mensajes de error de inputs correctos ('is-invalid' classes)
	var inputFields = [fName, fLastN, fEmail, fAddress, fPassword, fPhone];
	inputFields.forEach(function (input) {
		input.classList.remove("is-invalid");
	});

	//Validación y condiciones con regex (Regular Expressions)
	if (fName.value.length < 3 || !/^[A-Za-z]+$/.test(fName.value)) {
		error++;
		showError("fName", "errorName", "This field is required, must have at least 3 characters, and contain only letters.");
	}

	if (fLastN.value.length < 3 || !/^[A-Za-z]+$/.test(fLastN.value)) {
		error++;
		showError("fLastN", "errorLastN", "This field is required, must have at least 3 characters, and contain only letters.");
	}

	var emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
	if (!emailPattern.test(fEmail.value)) {
		error++;
		showError("fEmail", "errorEmail", "This field is required and must be a valid email address.");
	}

	if (fAddress.value.length < 3) {
		error++;
		showError("fAddress", "errorAddress", "This field is required and must have at least 3 characters.");
	}

	var passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,8}$/;
	if (fPassword.value.length < 3 || !passwordPattern.test(fPassword.value)) {
		error++;
		showError("fPassword", "errorPassword", "Enter a correct password.");
	}

	var phonePattern = /^[0-9]{9}$/;
	if (!phonePattern.test(fPhone.value)) {
		error++;
		showError("fPhone", "errorPhone", "Invalid phone number! Must be 9 digits with no letters.");
	}

	// Comprobar errores, mostrar alert correspondiente y borrar datos de los inputs
	if (error > 0) {
		alert("Error");
	} else {
		alert("OK");
		clearFormFields(inputFields);
	}
}

// mostrar los datos en pantalla
function showError(inputId, errorId, errorMessage) {
	var inputField = document.getElementById(inputId);
	var errorField = document.getElementById(errorId);

	inputField.classList.add("is-invalid");
	errorField.textContent = errorMessage;
}
// borrar datos de los inputs
function clearFormFields(inputFields) {
	inputFields.forEach(function (input) {
		input.value = "";
	});
}

// Evita que desaparezcan los datos cuando se presiona enter
document.querySelector('form').addEventListener('submit', function (e) {
	e.preventDefault();
});

