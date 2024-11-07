function validarFormulario() {
    // validacion del nombre
    var nombre = document.getElementById('nombre').value;
    if (nombre.trim() === '') {
        alert('Por favor, ingrese su nombre.');
        return false;
    }

    // valkidacion del paellido
    var apellido = document.getElementById('apellido').value;
    if (apellido.trim() === '') {
        alert('Por favor, ingrese su apellido.');
        return false;
    }

    // validacion de que fecha de nacimiento sea existente
    var nacimiento = document.getElementById('Nacimiento').value;
    var fechaNacimiento = new Date(nacimiento);
    var fechaHoy = new Date();
    if (fechaNacimiento > fechaHoy) {
        alert('La fecha de nacimiento no puede ser una fecha futura.');
        return false;
    }

    // validacion de mail
    var correo = document.getElementById('correo').value;
    var regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!regexCorreo.test(correo)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        return false;
    }

    // que pida completar el texto si selecciona opcion "otra"
    var tecnica = document.getElementById('tecnica').value;
    var consulta = document.getElementById('consulta').value;
    if (tecnica === 'opcion 4' && consulta.trim() === '') {
        alert('Por favor, especifique su consulta si selecciona "Otra" como técnica.');
        return false;
    }

    // se envia el formulario si todo se cumple
    return true;
}