const express = require("express");
const app = express();
const port = 3000;

const tasks = [
  { id: 1, description: "Hacer la compra para la comida", completed: false },
  {
    id: 2,
    description: "Estudiar para el examen de matematicas",
    completed: true,
  },
  { id: 3, description: "Hacer ejercicio en el parque", completed: false },
];

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto: ${port}`);
});
