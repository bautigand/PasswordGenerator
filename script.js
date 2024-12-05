// Selección de elementos del DOM
const generateBtn = document.getElementById("generate-btn");
const copyBtn = document.getElementById("copy-btn");
const passwordOutput = document.getElementById("password-output");
const copyMessage = document.getElementById("copy-message");

// Caracteres disponibles
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()-_=+[]{}|;:',.<>?/";

// Generar contraseña
generateBtn.addEventListener("click", () => {
    const length = parseInt(document.getElementById("length").value);
    const includeLowercase = document.getElementById("lowercase").checked;
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;

    const password = generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
    passwordOutput.value = password;
    copyMessage.classList.add("hidden");
});

// Función para generar la contraseña
function generatePassword(length, lowercase, uppercase, numbers, symbols) {
    let charSet = "";
    if (lowercase) charSet += lowercaseChars;
    if (uppercase) charSet += uppercaseChars;
    if (numbers) charSet += numberChars;
    if (symbols) charSet += symbolChars;

    if (charSet === "") {
        return "Selecciona al menos una opción";
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet[randomIndex];
    }
    return password;
}

// Copiar contraseña al portapapeles
copyBtn.addEventListener("click", () => {
    passwordOutput.select();
    document.execCommand("copy");
    copyMessage.classList.remove("hidden");
});
