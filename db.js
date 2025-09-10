import mysql from "mysql2/promise";
import { configDotenv } from "dotenv";

configDotenv; // Carga las variables de entorno

// Configuración de la conexión a la base de datos
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0, // sin limite de conexiones
});

export default pool;
