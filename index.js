document.getElementById("addtask").addEventListener("click", function () {
  const taskList = [];

  let cur_task_name = document.getElementById("cur_task").value;
  if (cur_task_name) {
    taskList.push({
      id: taskList.length + 1,
      name: cur_task_name,
      status: "incomplete",
    });
    console.log("tasks", taskList);
    let list = document.getElementById("todoList");
    taskList.map((task) => {
      let li = document.createElement("li");
      li.setAttribute("class", "task_li");
      li.innerHTML = `<input type="checkbox" /> <span>${task.name}</span>`;
      list.appendChild(li);
    });
    document.getElementById("cur_task").value = "";
    document.getElementById("cur_task").focus();
  }
});
