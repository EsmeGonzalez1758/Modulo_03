        document.getElementById("generate").addEventListener("click", generatePassword);
        document.getElementById("copyBtn").addEventListener("click", copyPassword);
        document.getElementById("length").addEventListener("input", updateLength);

        function generatePassword() {
            const length = document.getElementById("length").value;
            const uppercase = document.getElementById("uppercase").checked;
            const lowercase = document.getElementById("lowercase").checked;
            const numbers = document.getElementById("numbers").checked;
            const symbols = document.getElementById("symbols").checked;
            
            let chars = "";
            if (uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            if (lowercase) chars += "abcdefghijklmnopqrstuvwxyz";
            if (numbers) chars += "0123456789";
            if (symbols) chars += "!@#$%^&*()_+{}[]";
            
            let password = "";
            for (let i = 0; i < length; i++) {
                password += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            document.getElementById("password").value = password;
            document.getElementById("password").style.fontWeight = "bold";
            updateStrength(password);
        }

        function copyPassword() {
            const passwordField = document.getElementById("password");
            passwordField.select();
            document.execCommand("copy");
        }

        function updateLength() {
            document.getElementById("lengthValue").textContent = document.getElementById("length").value;
        }

        function updateStrength(password) {
            let strengthText = document.getElementById("strength");
            let strengthBox = document.getElementById("strength-box");
            
            if (password.length >= 12) {
                strengthText.textContent = "STRONG";
                strengthBox.style.color = "#00ff00";
            } else if (password.length >= 8) {
                strengthText.textContent = "MEDIUM";
                strengthBox.style.color = "#ffcc00";
            } else {
                strengthText.textContent = "WEAK";
                strengthBox.style.color = "#ff0000";
            }
        }