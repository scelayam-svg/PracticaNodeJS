//Importamos express
import express from "express";
import productoRoutes from "./routes/producto.routes.js";
import authRoutes from "./routes/auth.routes.js";

//Importamos para trabajar con rutas de carpetas
import path from "path" 

import { domainToASCII, fileURLToPath } from "url";

//------------------------------------------------------------/
//Importamos Helmet para agregar un encabezado de seguridad
import helmet from "helmet";

//Permite crear sesiones
import session from "express-session";

//Permite guardar sesiones en MongoDB
import MongoStore from "connect-mongo";

//Variables de configuracion
import { config } from "./config/env.js";

//------------------------------------------------------------/

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

//Crear la aplicaciones
const app=express();

//Oculta el encabezado que indica que la aplicacion utiliza express
app.disable("x-powered-by");

//Agregr el encabezado HTTP de seguridad
app.use(helmet({
    contentSecurityPolicy: false
    })

);  

//---------CONFIGURACIÓN DE EJS
app.set("view engine","ejs");

//Le decimos a Express donde están las vistas
app.set("views",path.join(__dirname,"views"));

//Permita usar archivos publicos estaticos
app.use(express.static(path.join(__dirname,"public")));

//---------MIDDLEWARES
app.use(express.urlencoded({extended:true}));

//Configuracion de la sesion
app.use(
    session({
        //nombre de la cookie que guardar en el navegador
        name: "sessionProductos",

        //Clave utilizada para firmar la cookie de sesion
    secret: config.sessionSecret,

    //No vuelva a guardar una sesion si no cambio
    resave: false,

    //No guarde una sesion vacia
    saveUninitialized: false,

    //Guardar las sesiones en MongoDB
    store: MongoStore.create({
        mongoUrl: config.mongoUri,
        collectionName: "sessions",
        //Duracion de la sesion en segundos
        ttl: 60 * 30    
    
    }),
    cookie:{
        //Impide que JS del navegador no pueda leer la cookie
        httpOnly: true,

        //Reduce el envio de cookies entre los sitios
        sameSite: "lax",

        //En desarrollo sera false
        secure: config.nodeEnv === "production",    

        //Duracion: 30min
        maxAge: 1000 * 60 * 30
    }
}));

/*//RUTA TEMPORAL PARA PROBAR LA SESION
app.get("/probar-sesion",(req,res)=>{
    //Si el contador no existe, lo inicializamos en 0
    if(!req.session.contador){
        req.session.contador=0;
    }
    //Aumentar el contador
    req.session.contador++;

    //muestra el valor del contador
    res.send(`Has visitado esta ruta ${req.session.contador} veces`);
});*/
    
//--------RUTAS
app.use("/",authRoutes);
app.use("/",productoRoutes);


/*
app.get("/prueba",(req,res)=>{
    res.send("Nos encontramos en prueba")
})
*/

//Exportamos la aplicaciones
export default app;


/*
Usuario inicia sesion
El servidos valida sus datos
La sesion guarda el ID del usuario
Se puede acceder a paginas protegidas

*/