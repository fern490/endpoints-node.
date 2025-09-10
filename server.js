import express from "express";
import pool from "./db.js";

const app = express();
const PORT = 5000;

app.use(express.json()); // Para poder leer JSON en el body

app.get("/", (req, res) => {
  res.send("Este es un endpoint hecho con express");
});

/* Endpoint con parámetro */
app.get("/api/user/:id", (req, res) => {
  // Destructuración (capturar el valor de un objeto más complejo para usarlo después)
  const { id } = req.params;

  res.send({ message: `El usuario con id ${id} es Pepito` });
});

/* Query params */
app.get("/api/search", (req, res) => {
  const { name, lastname } = req.query;

  res.json({
    firstName: name,
    lastname,
  });
  // http://localhost:3000/api/search?name=Federico&lastname=Villece (ver si funciona)
});

/* Endpoint POST */
app.post("/api/user", (req, res) => {
  const { name, email } = req.body;

  res.json({ message: "Usuario Creado", data: { name, email } });
});

/* Endpoint PUT */
app.put("/api/user/:id", (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  res.json({
    message: `Este es el usuario con id ${id}`,
    data: { name, email },
  });
});

/* Endpoint DELETE */
app.delete("/api/user/:id", (req, res) => {
  const { id } = req.params;

  res.json({ message: `Usuario con id ${id} eliminado` });
});

/* Iniciar el servidor */
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

// Endpoints DB => GET

app.get("/api/clientes", async (req, res) => {
  try {
    // código a probar
    const { rows } = await pool.query("SELECT * FROM clientes");
  } catch (error) {
    console.log(error);
  }
});
