//Importamos el modelo de usuario
import Usuario from "../models/usuario.model.js";  

//Buscamos un ususario por su correo
export async function obtenerUsuarioPorCorreo(correo) {

    return await Usuario.findOne({
        correo:correo.toLowerCase()
    });

}

//Buscar un usuario por correo e incluye password
export async function obtenerUsuarioParaLogin(correo) {
    return await Usuario.findOne({
        correo:correo.toLowerCase()
    }).select("+password");
}

//Crear un usuario nuevo
export async function crearUsuario(nombre, correo, passwordHash) {
    const nuevoUsuario=new Usuario({
        nombre:nombre.trim(),
        correo:correo.trim().toLowerCase(),
        password: passwordHash
    });
    
    return await nuevoUsuario.save();
}