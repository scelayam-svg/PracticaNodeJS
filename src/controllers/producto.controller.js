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
export async function mostrarProductos(req,res){
    try {
        const productos=await obtenerProductos();
        res.render("productos",{productos: productos });
    } catch (error) {
        res.send("Error al mostrar productos")
    }
}

//Mostrar el formulario de creación
//-----------------------------------------------
export function mostrarFormularioCrear(req,res){
    res.render("crear-productos");
}

//Guardar producto nuevo
//------------------------------------------------
export async function guardarProducto(req,res){
    try {
        const {nombre, precio} = req.body
        await agregarProducto(nombre,precio);
        res.redirect("/");
    } catch (error) {
        res.send("Error al guardar producto")
    }
}

//Mostrar formulario de edición 
//-------------------------------------
export async function mostrarFormularioEditar(req,res){
    try {
        const { id }= req.params;
        const producto =await obtenerProductoPorId(id);
        if(!producto){
            return res.send("Producto no encontrado");
        }
        res.render("editar-producto",{
            producto:producto
        });
    } catch (error) {
        res.send("Error al buscar producto")
    }
}

//Actualizar Producto
//---------------------------------------------
export async function guardarActualizacionProducto(req,res){
    try {
        const { id } = req.params;
        const { nombre, precio }= req.body;
        await actulizarProducto(id,nombre,precio);
        res.redirect("/")
    } catch (error) {
        res.send("Error al actualizar producto");
    }
}

//Eliminar producto
//---------------------------------------------
export async function borrarProducto(req,res){
    try {
        const { id }=req.params;
        await eliminarProducto(id);
        res.redirect("/");
    } catch (error) {
        res.send("Error al eliminar producto")
    }
}
