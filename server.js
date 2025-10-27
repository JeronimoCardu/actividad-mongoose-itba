const express = require("express");
const app = express();

app.use(express.json());

const taskRoutes = require("./routes/taskRoutes");
const projectRoutes = require("./routes/projectRoutes");
app.use("/tasks", taskRoutes);
app.use("/projects", projectRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
