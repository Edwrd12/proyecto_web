function validarNombre() {

    var nombre = document.getElementById("nombre").value;
    var txtNombre = document.getElementById("nombre");

    //Test campo obligatorio
    if (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
        alert('ERROR: El campo nombre no debe ir vacío o lleno de solamente espacios en blanco');
        txtNombre.classList.add('error');
    } else {
        txtNombre.classList.remove('error');
    }
}

function validarCorreo() {

    var correo = document.getElementById("mail").value;
    var txtCorreo = document.getElementById("mail");

    //Test correo
    if (correo == null || correo.length == 0 || !(/\S+@\S+\.\S+/.test(correo))) {
        alert('ERROR: Debe escribir un correo válido');
        txtCorreo.classList.add('error');
    } else {
        txtCorreo.classList.remove('error');
    }
}

function validarFormulario() {
    validarNombre();
    validarCorreo()
}
