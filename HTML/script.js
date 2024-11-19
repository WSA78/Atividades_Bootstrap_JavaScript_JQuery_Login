$(document).ready(function () {
    // Função para atualizar a seção de login e exibir o nome e foto do usuário
    function updateLoginSection() {
        const user = localStorage.getItem("user");

        if (user) {
            // Usar a imagem fictícia "menina.png" para o usuário (ajuste conforme necessário)
            const userPhoto = "menina.png"; 

            // Atualiza a seção de login
            $("#loginSection").html(`
                <div class="user-profile">
                    <img src="${userPhoto}" class="user-photo" alt="Foto do usuário">
                    <div class="user-name">
                        <span class="greeting">Bem-vindo</span>
                        <span class="username">${user}</span>
                        <button id="logoutButton" class="btn btn-danger btn-sm">Sair</button>
                    </div>
                </div>
            `);

            // Função de logout
            $("#logoutButton").click(function () {
                localStorage.removeItem("user");
                window.location.href = "login.html"; // Redireciona para a página de login
            });
        } else {
            // Exibe o botão de login se o usuário não estiver logado
            $("#loginSection").html(`
                <a href="login.html" id="loginButton" class="button">Login</a>
            `);
        }
    }

    // Atualiza a seção de login ao carregar a página
    updateLoginSection();

    // Formulário de login
    $("#loginForm").submit(function (event) {
        event.preventDefault();

        const username = $("#username").val();
        const password = $("#password").val();

        // Validação de login (substitua com validação real)
        if (username === "admin" && password === "12345") {
            $("#loginMessage").text("Bem-vindo!").css("color", "green");

            // Armazena o nome do usuário no localStorage e redireciona
            localStorage.setItem("user", username);
            setTimeout(() => window.location.href = "index5.html", 1000);
        } else {
            $("#loginMessage").text("Usuário ou senha incorretos.").css("color", "red");
        }
    });

    // Funcionalidade de carrossel (automático e pausa ao passar o mouse)
    $('#carouselExample').carousel({
        interval: 2000
    });

    $('#carouselExample').hover(function() {
        $(this).carousel('pause');
    }, function() {
        $(this).carousel('cycle');
    });

    // Funcionalidade de busca de produtos
    function searchProducts() {
        var input, filter, cards, cardTitle, i, txtValue;
        input = document.getElementById('searchInput');
        filter = input.value.toUpperCase();
        cards = document.getElementsByClassName('card');

        for (i = 0; i < cards.length; i++) {
            cardTitle = cards[i].getElementsByClassName('card-title')[0];
            txtValue = cardTitle.textContent || cardTitle.innerText;

            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                cards[i].style.display = "";
            } else {
                cards[i].style.display = "none";
            }
        }
    }

    // Funcionalidade do carrinho flutuante
    $(".cart").hover(
        function () {
            $(this).find(".cart-popup").show();
        },
        function () {
            $(this).find(".cart-popup").hide();
        }
    );

    // Clique no carrinho leva à página de carrinho
    $(".cart").click(function () {
        window.location.href = "cart.html";
    });

    // **Adicionar animação de hover no ícone de login para exibir o popup**
    $('#loginIcon').hover(
        function () {
            // Ao passar o mouse, mostramos a mensagem com fadeIn
            $('#loginMessage').stop(true, true).fadeIn(300);
        },
        function () {
            // Ao retirar o mouse, escondemos a mensagem com fadeOut
            $('#loginMessage').stop(true, true).fadeOut(300);
        }
    );
});
$(document).ready(function () {
    // Lógica para o botão de voltar
    $('#backButton').click(function () {
        window.location.href = 'index5.html'; // Redireciona para a página inicial
    });
});
