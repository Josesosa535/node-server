const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const tasks = [];

function addTask() {
  return new Promise((resolve, reject) => {
    rl.question("Ingrese el indicador de la tarea: ", (indicator) => {
      rl.question("Ingrese la descripción de la tarea: ", (description) => {
        const task = { indicator, description, completed: false };
        tasks.push(task);
        resolve("Tarea añadida con éxito.");
      });
    });
  });
}

function removeTask() {
  return new Promise((resolve, reject) => {
    rl.question("Ingrese el índice de la tarea a eliminar: ", (index) => {
      if (index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
        resolve("Tarea eliminada con éxito.");
      } else {
        reject("El índice ingresado no es válido.");
      }
    });
  });
}

function completeTask() {
  return new Promise((resolve, reject) => {
    rl.question(
      "Ingrese el índice de la tarea a marcar como completada: ",
      (index) => {
        if (index >= 0 && index < tasks.length) {
          tasks[index].completed = true;
          resolve("Tarea completada con éxito.");
        } else {
          reject("El índice ingresado no es válido.");
        }
      }
    );
  });
}

function showTasks() {
  console.log("Lista de tareas:");
  tasks.forEach((task, index) => {
    const status = task.completed ? "Completada" : "No completada";
    console.log(
      `${index}. Indicador: ${task.indicator}, Descripción: ${task.description}, Estado: ${status}`
    );
  });
}

async function main() {
  console.log("¡Bienvenido al administrador de tareas!\n");
  while (true) {
    console.log("Seleccione una opción:");
    console.log("1. Añadir tarea");
    console.log("2. Eliminar tarea");
    console.log("3. Marcar tarea como completada");
    console.log("4. Mostrar tareas");
    console.log("5. Salir");

    const option = await askQuestion("Ingrese el número de la opción: ");

    switch (option) {
      case "1":
        try {
          await addTask();
          console.log("Tarea añadida con éxito.");
        } catch (error) {
          console.log("Error al añadir la tarea:", error);
        }
        break;
      case "2":
        try {
          await removeTask();
          console.log("Tarea eliminada con éxito.");
        } catch (error) {
          console.log("Error al eliminar la tarea:", error);
        }
        break;
      case "3":
        try {
          await completeTask();
          console.log("Tarea completada con éxito.");
        } catch (error) {
          console.log("Error al completar la tarea:", error);
        }
        break;
      case "4":
        showTasks();
        break;
      case "5":
        rl.close();
        return;
      default:
        console.log("Opción inválida. Intente nuevamente.");
        break;
    }
  }
}

function askQuestion(question) {
  return new Promise((resolve, reject) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

main()
  .then(() => {
    console.log("Programa finalizado.");
  })
  .catch((error) => {
    console.log("Error en el programa:", error);
  });
