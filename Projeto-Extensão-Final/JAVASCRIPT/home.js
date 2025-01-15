document.addEventListener('DOMContentLoaded', function() {
    const loginLogoutIcone = document.getElementById('login-logout-icone');

    // Verifica se o usuário está logado usando localStorage
    if (localStorage.getItem('usuarioLogado') === 'true') {
        // Troca o ícone de login pelo de logout
        loginLogoutIcone.textContent = '🚪'; // Ícone de logout
        loginLogoutIcone.title = 'Sair'; // Tooltip para indicar logout

        // Adiciona evento para logout
        loginLogoutIcone.addEventListener('click', function() {
            localStorage.removeItem('usuarioLogado'); // Remove a sessão
            alert('Você saiu com sucesso!');
            window.location.reload(); // Recarrega a página
        });
    } else {
        // Ícone permanece como login
        loginLogoutIcone.textContent = '👤'; // Ícone de login
        loginLogoutIcone.title = 'Entrar'; // Tooltip para indicar login
        loginLogoutIcone.onclick = function() {
            window.location.href = 'login.html'; // Redireciona para a tela de login
        };
    }
});
