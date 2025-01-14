function CustomLoginForm() {
    var username = document.getElementById('id_username').value;
    var password = document.getElementById('id_password').value;

    if (username.length < 5) {
      alert('El nombre de usuario debe tener al menos 5 caracteres.');
      return false; // Evita que el formulario se envíe
    }

    if (password.length < 8) {
      alert('La contraseña debe tener al menos 8 caracteres.');
      return false; // Evita que el formulario se envíe
    }

    return true;
  }