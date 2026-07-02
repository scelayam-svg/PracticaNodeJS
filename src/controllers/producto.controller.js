//Logica

//Obtener Datos
import {
    obtenerProductos,
    agregarProducto,
    obtenerProductoPorId,
    actulizarProducto,
    eliminarProducto
}
from "../services/producto.service.js"

//Mostrar los productos en la página principal
//-----------------------------------------------------------------
export function mostrarProductos(req,res){
    const productos=obtenerProductos();
    res.render("productos",{productos: productos });
}

//Mostrar el formulario de creación
//-----------------------------------------------
export function mostrarFormularioCrear(req,res){
    res.render("crear-productos");
}

//Guardar producto nuevo
//------------------------------------------------
export function guardarProducto(req,res){
    const {nombre, precio} = req.body
    agregarProducto(nombre,precio);
    res.redirect("/");
}

//Mostrar formulario de edición 
//-------------------------------------
export function mostrarFormularioEditar(req,res){
    const { id }= req.params;
    const producto = obtenerProductoPorId(id);
    if(!producto){
        return res.send("Producto no encontrado");
    }
    res.render("editar-producto",{
        producto:producto
    });
}

//Actualizar Producto
//---------------------------------------------
export function guardarActualizacionProducto(req,res){
    const { id } = req.params;
    const { nombre, precio }= req.body;
    actulizarProducto(id,nombre,precio);
    res.redirect("/")
}

//Eliminar producto
//---------------------------------------------
export function borrarProducto(req,res){
    const { id }=req.params;
    eliminarProducto(id);
    res.redirect("/");
}