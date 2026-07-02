//Simulacion de la base

let productos=[
    {
        id:1,
        nombre:"Mouse",
        precio:5000
    },
    {
        id:2,
        nombre:"Teclado",
        precio:10000
    },
    {
        id:3,
        nombre:"Cables USB",
        precio:1500
    }
];

let nextId = 4;

//Devuelva todos los productos
export function obtenerProductos(){
    return productos;
}

//Agregar un nuevo producto
export function agregarProducto(nombre, precio){
    const nuevoProducto = {
        id: nextId,
        nombre,
        precio:Number(precio)
    }
    nextId++;
    productos.push(nuevoProducto);
}

//Buscar un producto por id
export function obtenerProductoPorId(id){
    const idNumerico=Number(id);
    return productos.find(producto=>producto.id===idNumerico);
}

//Actualizar un producto existente
export function actulizarProducto(id,nombre,precio){
    const idNumerico=Number(id);
    const producto= productos.find(producto=>producto.id===idNumerico);
    if(!producto){
        return false
    }
    producto.nombre=nombre;
    producto.precio=Number(precio);
    return true;
}

//Eliminar producto
export function eliminarProducto(id){
    const idNumerico=Number(id);
    productos=productos.filter(producto=>producto.id!==idNumerico);
}