const credentials = {
    login: 'admin',
    password: 'qwerty',
  };

const loginButton = document.getElementById('login-button');
loginButton.addEventListener('click', function() {
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;

    if (login === credentials.login && password === credentials.password) {
      const successDiv = document.getElementById('success');
      successDiv.style.display = 'block';
      successDiv.innerHTML = 'Welcome, ' + login + '!';
      const errorDiv = document.getElementById('error');
      errorDiv.style.display = 'none';
    } else {
      const errorDiv = document.getElementById('error');
      errorDiv.style.display = 'block';
      errorDiv.innerHTML = 'Invalid login or password.';
      const successDiv = document.getElementById('success');
      successDiv.style.display = 'none';
    }
  });