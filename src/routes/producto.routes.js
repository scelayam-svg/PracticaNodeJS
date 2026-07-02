//RUTAS

//Importar Express
import express from "express";

//Importamos los controladores
import {
    mostrarProductos,
    mostrarFormularioCrear,
    guardarProducto,
    mostrarFormularioEditar,
    guardarActualizacionProducto,
    borrarProducto
}
from "../controllers/producto.controller.js";

//Creamos el router
const router=express.Router();

//-------------------------------
//RUTA GET
router.get("/",mostrarProductos);
router.get("/productos/nuevo",mostrarFormularioCrear);
router.post("/productos",guardarProducto);
router.get("/productos/editar/:id",mostrarFormularioEditar);
router.post("/productos/editar/:id",guardarActualizacionProducto);
router.post("/productos/eliminar/:id",borrarProducto);

//Exportamos las rutas
export default router;