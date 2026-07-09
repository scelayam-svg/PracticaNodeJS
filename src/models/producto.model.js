import mongoose from "mongoose";

//Modelo --- coleccion y estructura Schema
const productoSchema = new mongoose.Schema(
    {
        nombre:{type:String,
             required:true,
             trim:true,},

        precio:{type:Number,
             required:true,
             min:0}
    },{
        timestamps:true
    }
)

//Creamos el modelo
const Producto = mongoose.model("Producto", productoSchema);

export default Producto;
