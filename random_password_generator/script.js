const generateBtn = document.getElementById("generate-btn");
const resetBtn = document.getElementById("reset-btn");
const passwordResult = document.getElementById("password-result");

generateBtn.addEventListener("click", () => {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    const length = parseInt(document.getElementById("length").value);

    const includeUppercase = document.getElementById("include-uppercase").checked;
    const includeLowercase = document.getElementById("include-lowercase").checked;
    const includeNumbers = document.getElementById("include-numbers").checked;
    const includeSpecial = document.getElementById("include-special").checked;


    if(!includeUppercase && !includeLowercase && !includeNumbers && !includeSpecial) {
        passwordResult.textContent = "Please select at least one character type.";
        passwordResult.style.color = "red";
        return;
    }else {
        let charPool = "";
        if (includeUppercase) charPool += uppercaseChars;
        if (includeLowercase) charPool += lowercaseChars;
        if (includeNumbers) charPool += numberChars;
        if (includeSpecial) charPool += specialChars;
        
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charPool.length);
            password += charPool[randomIndex];
        }
        passwordResult.textContent = password;
        passwordResult.style.color = "black";
    }
});
resetBtn.addEventListener('click', ()=>{
    document.getElementById("length").value = 12;
    document.getElementById("include-uppercase").checked = true;
    document.getElementById("include-lowercase").checked = true;
    document.getElementById("include-numbers").checked = true;
    document.getElementById("include-special").checked = true;
    passwordResult.textContent = "Your generated password will appear here.";
    passwordResult.style.color = "black";
});