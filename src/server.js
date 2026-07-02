import app from "./app.js";


//Importamos la configuración de sistema
import {config} from "./config/env.js";

//Iniciamos el servidor
app.listen(config.port,()=>{
    console.log(
        `Servidor ejecutandose en http://localhost:${config.port}`
    );
});