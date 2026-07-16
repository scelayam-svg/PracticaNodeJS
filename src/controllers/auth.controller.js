import bcrypt from "bcrypt";
import {
    obtenerUsuarioParaLogin,
    obtenerUsuarioPorCorreo,
    crearUsuario
} from "../services/usuario.service.js";

//Muestre la pagina de registro de usuario
export function mostrarRegistro(req,res){
    res.render("registro", {
        error: null,
        datos: {}
    });
}

//Registrar un nuevo usuario
export async function registrarUsuario(req,res){ 
    try {
        const {
            nombre, 
            correo, 
            password, 
            confirmarPassword
        } = req.body;

        const datos = { nombre, correo };

        //Verificamos que los campos esten completos
        if(!nombre?.trim() || !correo?.trim() || !password || !confirmarPassword){
            return res.status(400).render("registro",{
                error: "Todos los campos son obligatorios",
                datos
            });
        }

        //Verificamos que las contraseñas coincidan
        if(password !== confirmarPassword){
            return res.status(400).render("registro",{
                error: "Las contraseñas no coinciden",
                datos
            });
        }

        //Buscar si el correo ya esta registrado
        const usuarioExistente = await obtenerUsuarioPorCorreo(correo);
        
        if(usuarioExistente){
            return res.status(409).render("registro",{
                error: "Ese correo ya se encuentra registrado",
                datos
            });
        }

        //Protegemos la contraseña con hash
        const passwordHash = await bcrypt.hash(password, 12);

        //Guardamos en MongoDB el nuevo usuario
        await crearUsuario(nombre, correo, passwordHash);

        //Redirigimos a la pagina de login
        res.redirect("/login");

    } catch (error) {
        console.log("Error al registrar usuario", error);
        res.status(500).render("registro",{
            error: "No fue posible registrar el usuario",
            datos: {
                nombre: req.body.nombre,
                correo: req.body.correo
            }
        });
    }
}

//Mostrar la pagina de login
export function mostrarLogin(req,res){
    res.render("login", {
        error: null,
        datos: {}
    });
}

//Procesar el login
export async function procesarLogin(req,res){
    try {
        const { correo, password } = req.body;

        const datos = { correo };

        //Verificamos que los campos esten completos
        if(!correo?.trim() || !password){
            return res.status(400).render("login",{
                error: "Todos los campos son obligatorios",
                datos
            });
        }

        //Buscar el usuario por correo
        const usuario = await obtenerUsuarioParaLogin(correo);

        if(!usuario){
            return res.status(401).render("login",{
                error: "Correo o contraseña incorrectos",
                datos
            });
        }

        //Verificar la contraseña
        const passwordValida = await bcrypt.compare(password, usuario.password);

        if(!passwordValida){
            return res.status(401).render("login",{
                error: "Correo o contraseña incorrectos",
                datos
            });
        }

        //Login exitoso
        res.redirect("/");

    } catch (error) {
        console.log("Error al iniciar sesion", error);
        res.status(500).render("login",{
            error: "No fue posible iniciar sesion",
            datos: {
                correo: req.body.correo
            }
        });
    }
}