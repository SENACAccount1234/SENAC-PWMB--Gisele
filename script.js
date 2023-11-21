var usersDatabase = [];

function showRegisterForm() {
    document.getElementById('loginCard').classList.add('hidden');
    document.getElementById('registerCard').classList.remove('hidden');
}

function showLoginForm() {
    document.getElementById('registerCard').classList.add('hidden');
    document.getElementById('loginCard').classList.remove('hidden');
}

function performLogin() {
    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;

    var user = usersDatabase.find(function (u) {
        return u.username === username && u.password === password;
    });

    if (user) {
        alert('Login bem-sucedido! Bem-vindo, ' + user.name + '!');
        window.location.href = 'logistica.html';
    } else {
        alert('Falha no login. Verifique suas credenciais.');
    }
}

function performRegistration() {
    var name = document.getElementById('registerName').value;
    var email = document.getElementById('registerEmail').value;
    var username = document.getElementById('registerUsername').value;
    var password = document.getElementById('registerPassword').value;

    var existingUser = usersDatabase.find(function (u) {
        return u.username === username;
    });

    if (existingUser) {
        alert('Este usuário já está cadastrado. Por favor, escolha outro.');
    } else {
        usersDatabase.push({
            name: name,
            email: email,
            username: username,
            password: password
        });

        alert('Cadastro bem-sucedido! Faça login agora.');
        window.location.href = 'logistica.html';
    }
}
