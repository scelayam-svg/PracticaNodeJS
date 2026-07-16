//Importamos a mongoose para trabajar con MongoDB
import mongoose from "mongoose";

const usuarioSchema=new mongoose.Schema({
    //nombre completo del usuario
    nombre:{
        type:String,
        required:true,
        trim:true
    },
    //correo utilizado para iniciar sesion
    correo:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true
    },
    //Contraseña protegida por hash
    password:{
        type:String,
        required:true,
        //No devuelva la contraseña automaticamente
        select:false
    },
    //Rol de usuario
    rol:{
        type:String,
        enum:["administrador","usuario"], 
        default:"usuario"
    }
},
{timestamps:true});



const Usuario=mongoose.model("Usuario", usuarioSchema);
export default Usuario;