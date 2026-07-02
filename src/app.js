//Importamos express
import express from "express";
import productoRoutes from "./routes/producto.routes.js"

//Importamos para trabajar con rutas de carpetas
import path from "path";
import { fileURLToPath } from "url";

//Permitir obtener la ruta actual cuando usemos EJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Crear la aplicaciones
const app=express();

//---------CONFIGURACION EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//---------MIDDLEWARES
app.use(express.static(path.join(__dirname, "..", "public")));

//--------RUTAS
app.use("/",productoRoutes);

/*
app.get("/prueba",(req,res)=>{
    res.send("Nos encontramos en prueba")
})
*/

//Exportamos la aplicaciones
export default app;