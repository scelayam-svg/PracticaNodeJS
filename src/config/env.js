//Importar el modulo
import dotenv from "dotenv";

//Cargar las variables del archivo .env
dotenv.config()

export const config={
    //Si existe PORT
    //Si no existe usa 3000
    port:process.env.PORT || 3000
};