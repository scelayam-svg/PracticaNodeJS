//Importar el modulo
import dotenv from "dotenv";

//Cargar las variables del archivo .env
dotenv.config()

export const config={
    //Si existe PORT
    //Si no existe usa 3000
    port:process.env.PORT || 3000,

    //URL de conexi�n a MONGO DB
    mongoUri: process.env.MONGO_URI,

    //Clave utilizada para firmar la cookie de sesion
    sessionSecret: process.env.SESSION_SECRET,

    //Entorno actual de la aplicacion    
    nodeEnv: process.env.NODE_ENV || 'development'

};
