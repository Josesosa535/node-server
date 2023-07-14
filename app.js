const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const tasks = [];

function addTask() {
  rl.question("Ingrese el indicador de la tarea: ", (indicator) => {
    rl.question("Ingrese la descripción de la tarea: ", (description) => {
      const task = { indicator, description, completed: false };
      tasks.push(task);
      console.log("Tarea añadida con éxito.");
      showMenu();
    });
  });
}

function removeTask() {
  rl.question("Ingrese el índice de la tarea a eliminar: ", (index) => {
    if (index >= 0 && index < tasks.length) {
      tasks.splice(index, 1);
      console.log("Tarea eliminada con éxito.");
    } else {
      console.log("El índice ingresado no es válido.");
    }
    showMenu();
  });
}

function completeTask() {
  rl.question(
    "Ingrese el índice de la tarea a marcar como completada: ",
    (index) => {
      if (index >= 0 && index < tasks.length) {
        tasks[index].completed = true;
        console.log("Tarea completada con éxito.");
      } else {
        console.log("El índice ingresado no es válido.");
      }
      showMenu();
    }
  );
}

function showTasks() {
  console.log("Lista de tareas:");
  tasks.forEach((task, index) => {
    const status = task.completed ? "Completada" : "No completada";
    console.log(
      `${index}. Indicador: ${task.indicator}, Descripción: ${task.description}, Estado: ${status}`
    );
  });
  showMenu();
}

function showMenu() {
  console.log("\nSeleccione una opción:");
  console.log("1. Añadir tarea");
  console.log("2. Eliminar tarea");
  console.log("3. Marcar tarea como completada");
  console.log("4. Mostrar tareas");
  console.log("5. Salir");

  rl.question("\nIngrese el número de la opción: ", (option) => {
    switch (option) {
      case "1":
        addTask();
        break;
      case "2":
        removeTask();
        break;
      case "3":
        completeTask();
        break;
      case "4":
        showTasks();
        break;
      case "5":
        rl.close();
        break;
      default:
        console.log("Opción inválida. Intente nuevamente.");
        showMenu();
        break;
    }
  });
}

console.log("¡Bienvenido al administrador de tareas!\n");
showMenu();
