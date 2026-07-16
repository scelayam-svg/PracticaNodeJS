import express from "express";
import {
    mostrarRegistro,
    registrarUsuario,
    mostrarLogin,
    procesarLogin
} 
from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/registro", mostrarRegistro);
router.post("/registro", registrarUsuario);
router.get("/login", mostrarLogin);
router.post("/login", procesarLogin);

export default router;