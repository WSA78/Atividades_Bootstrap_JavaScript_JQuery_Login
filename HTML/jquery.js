$(document).ready(function () {
    const user = localStorage.getItem("user");

    if (user) {
        // Usuário logado
        $("#loginSection").html(`
            <span>Bem-vindo, ${user}</span>
            <button id="logoutButton" class="btn btn-danger btn-sm">Sair</button>
        `);

        $("#logoutButton").click(function () {
            localStorage.removeItem("user");
            window.location.href = "login.html"; // Redireciona para a tela de login
        });
    } else {
        // Usuário não logado
        $("#loginSection").html(`
            <a href="login.html" id="loginButton" class="btn btn-primary">Login</a>
        `);
    }
});
