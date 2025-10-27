const express = require("express");
const app = express();
const connectDB = require("./db");
const cors = require("cors");

connectDB();


app.use(express.json());

const taskRoutes = require("./routes/taskRoutes");
const projectRoutes = require("./routes/projectRoutes");
app.use("/tasks", taskRoutes);
app.use("/projects", projectRoutes);
app.use(cors());


const DB_URI = 'mongodb+srv://admin:admin123@cluster0.zq1hgij.mongodb.net/dbClase?retryWrites=true&w=majority';
// ¡NO OLVIDES REEMPLAZAR <usuario>, <contraseña>, <tu_cluster> y <nombre_de_tu_base_de_datos>!
 
 
// *** Conexión a la Base de Datos ***
mongoose.connect(DB_URI)
  .then(() => console.log('¡Conexión exitosa a MongoDB!'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));
 
// Configuración básica de Express
app.use(express.json());
 
// Definir una ruta de prueba para verificar que el servidor funciona
app.get('/', (req, res) => {
  res.send('Servidor Express funcionando y conectado a MongoDB (esperemos!)');
});
 
// Ruta de 404 y manejo de errores (ya lo teníamos de clases anteriores)
app.use((req, res, next) => {
  res.status(404).send('Página no encontrada');
});
 
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal en el servidor');
});
 
// Iniciar el servidor Express
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
  console.log(`Accede desde tu navegador: http://localhost:${PORT}`);
});
