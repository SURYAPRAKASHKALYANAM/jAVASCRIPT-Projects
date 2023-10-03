

addBtn = document.getElementById("btn");
task = document.getElementById("todo");
tasksection = document.getElementById("add");
clearLocal = document.getElementById("btn1");


clearLocal.addEventListener("click", function () {
    localStorage.clear();
    clearLocal.style.display = "none";
})


addBtn.addEventListener("click", updatelocalstorage)

function updatelocalstorage() {
    event.preventDefault();
    if (task.value === ""){
        alert("No task Mentioned")
    }
    else {
        localStorage.setItem(localStorage.length, task.value);
        task.value = ""
    }
    DipalyTasks();
}

function DipalyTasks() {
    console.log("//hy")
    for (let i = 0; i < localStorage.length; i++) {

    }
    if (localStorage.length) clearLocal.style.display = "block";

}

DipalyTasks();

