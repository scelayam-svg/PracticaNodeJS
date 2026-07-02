//Logica

//Obtener Datos
import {
    obtenerProductos,
    agregarProducto
}
from "../services/producto.service.js"

//Mostrar los productos en la página principal
//-------------------------------------------
export function mostrarProductos(req,res){
    //Solicitar los productos al servicio
    const productos=obtenerProductos();

    res.render("productos", { productos });

}

//Mostrar el formulario de creacion
//--------------------------------------

export function mostrarFormularioCrear(req, res){
    res. render("crear-productos");
}
