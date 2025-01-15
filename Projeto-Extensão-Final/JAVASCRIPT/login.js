document.getElementById('form-login').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    // Pega os valores dos campos
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Regex para validar e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validação do e-mail
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }

    // Validação da senha (mínimo 6 caracteres)
    if (senha.length < 6) {
        alert('A senha deve ter pelo menos 6 caracteres.');
        return;
    }

    // Login bem-sucedido: redireciona para a tela inicial
    alert('Login bem-sucedido! Redirecionando...');
    window.location.href = '../HTML/index.html'; // Redireciona para a tela inicial

    // Simula uma sessão de usuário logado (localStorage)
    localStorage.setItem('usuarioLogado', 'true');
});
