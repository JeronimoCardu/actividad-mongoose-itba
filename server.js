const express = require("express");
const app = express();
const connectDB = require("./db");
const PORT = 3000;
connectDB();


app.use(express.json());

const taskRoutes = require("./routes/taskRoutes");
const projectRoutes = require("./routes/projectRoutes");
const userRoutes = require("./routes/userRoutes");
app.use("/tasks", taskRoutes);
app.use("/projects", projectRoutes);
app.use("/users", userRoutes);

// Iniciar el servidor Express
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
  console.log(`Accede desde tu navegador: http://localhost:${PORT}`);
});
