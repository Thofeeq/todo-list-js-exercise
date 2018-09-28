
// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description ) {

  const task = {
    title:title,
    description:description,
    complete:false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };

  return task;
}

function logTaskState(task) {
  console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
}

// marks the provided task as completed
function completeTask(task) {
  task.complete = true;
}


const task1 = newTask("Clean Cat Litter","a"); // task 0
const task2 = newTask("Do Laundry","b"); // task 1

const tasks = [task1, task2];

task1.logState();
task1.markCompleted();
task1.logState(); 

