//mongoose
import mongoose from "mongoose";

//importar la configuración del proyecto
import { config } from "./env.js";

//Función para conectar a mongoDB
export async function conectarDB() {
    try {
        //abrir la conexión a mongodb
        await mongoose.connect(config.mongoUri);
        console.log("Conexión exitosa a MongoDB");
    } catch (error) {
        console.error("Error al conectar a MongoDB",error.message);
        process.exit(1);
    }
}
