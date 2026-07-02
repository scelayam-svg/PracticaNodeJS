//RUTAS

//Importar Express
import express from "express";

//Importamos los controladores
import {
    mostrarProductos
    mostrarFormularioCrear
    
}
from "../controllers/producto.controller.js";

//Creamos el router
const router=express.Router();

//-------------------------------
//RUTA GET

router.get("/",mostrarProductos);
router.get("/productos/nuevo", mostrarFormularioCrear);

//Exportamos las rutas
export default router;