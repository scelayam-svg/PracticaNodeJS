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
    const mensaje = req.query.mensaje || null;
    res.render("productos",{ productos, mensaje });
}

//Mostrar el formulario de creación
//-----------------------------------------------
export function mostrarFormularioCrear(req,res){
    res.render("crear-productos");
}

//Guardar producto nuevo
//------------------------------------------------
export function guardarProducto(req,res){
    const {nombre, precio} = req.body;
    agregarProducto(nombre,precio);
    res.redirect("/?mensaje=creado");
}

//Mostrar formulario de edición 
//-------------------------------------
export function mostrarFormularioEditar(req,res){
    const { id }= req.params;
    const producto = obtenerProductoPorId(id);
    if(!producto){
        return res.send("Producto no encontrado");
    }
    res.render("editar-producto",{ producto });
}

//Actualizar Producto
//---------------------------------------------
export function guardarActualizacionProducto(req,res){
    const { id } = req.params;
    const { nombre, precio }= req.body;
    const exito = actulizarProducto(id,nombre,precio);
    if(exito){
        res.redirect("/?mensaje=editado");
    } else {
        res.redirect("/?mensaje=error");
    }
}

//Eliminar producto
//---------------------------------------------
export function borrarProducto(req,res){
    const { id }=req.params;
    eliminarProducto(id);
    res.redirect("/?mensaje=eliminado");
}