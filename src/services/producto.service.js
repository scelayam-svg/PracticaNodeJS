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
        precio:12000
    },
    {
        id:3,
        nombre:"Monitor",
        precio:85000
    },
    {
        id:4,
        nombre:"Headset",
        precio:15000
    }
];

//Devuelva todos los productos
export function obtenerProductos(){
    return productos;
}

//Agregar un nuevo producto
export function agregarProducto(nombre, precio){
    //Crear el nuevo objeto
    /*
    {
        id:1,
        nombre:"Mouse",
        precio:5000
    }
    */
    const nuevoProducto = {
        id:productos.length+1,
        nombre,
        precio:Number(precio)
    }

    //Guardamos el producto nuevo en el arreglo
    productos.push(nuevoProducto);
}