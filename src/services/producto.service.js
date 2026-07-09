//Llamamos a la base de datos
import Producto from "../models/producto.model.js";

//Devuelva todos los productos
export async function obtenerProductos(){
    return await Producto.find().sort({createdAt:-1});
}

//Agregar un nuevo producto
export async function agregarProducto(nombre, precio){
    const nuevoProducto = new Producto({
        nombre:nombre,
        precio:Number(precio)
    });
    return await nuevoProducto.save();
}

//Buscar un producto por id
export async function obtenerProductoPorId(id){
    return await Producto.findById(id);
}

//Actualizar un producto existente
export async function actulizarProducto(id,nombre,precio){
    return await Producto.findByIdAndUpdate(id,{
        nombre:nombre,
        precio:Number(precio)
    }, {new:true});
}

//Eliminar producto
export async function eliminarProducto(id){
    return await Producto.findByIdAndDelete(id);
}
