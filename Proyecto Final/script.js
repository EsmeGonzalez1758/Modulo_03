// Users
const users = [
    { name: "Esmeralda Muñoz", username: "esmem", password: "1234", image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Adrian Gomez", username: "adr13", password: "aeio", image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Rose Park", username: "rpark1", password: "abcd", image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
];

function logIn() {
    const usernamePage = document.getElementById('username').value.trim();
    const passwordPage = document.getElementById('password').value.trim();
    const error = document.getElementById('error');

    const userFind = users.find(user => user.username === usernamePage && user.password === passwordPage);

    if (userFind) {
        localStorage.setItem("loggedUser  ", JSON.stringify(userFind));
        window.location.href = "home.html"; // Redirigir a la página principal
    } else {
        error.textContent = "Usuario o contraseña incorrecta";
    }
}