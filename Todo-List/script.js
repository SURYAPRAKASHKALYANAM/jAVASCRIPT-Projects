

addBtn = document.getElementById("btn");
task = document.getElementById("todo");
tasksection = document.getElementById("task");
tasksection.innerHTML="";
clearLocal = document.getElementById("btn1");


clearLocal.addEventListener("click", function () {
    localStorage.clear();
    clearLocal.style.display = "none";
    tasksection.innerHTML = ""
})


addBtn.addEventListener("click", updatelocalstorage)

function updatelocalstorage() {
    event.preventDefault();
    if (task.value === ""){
        alert("No task Mentioned")
    }
    else {
        localStorage.setItem(localStorage.length, task.value);
        DipalyTasks();
        task.value = "";
    }
    
    
}
function setclick(id)
{
    document.getElementById(id).addEventListener("click",deleteTask(id));
}
function DipalyTasks() {
    tasksection.innerHTML="";
    for(let i=0;i<localStorage.length;i++)
    {
        tasksection.innerHTML+=`<li><p>${localStorage[i]}<img src="./remov.svg" alt="remove" id=${i} onclick=setclick(${i})></p></li>`;
    }
    if (localStorage.length) clearLocal.style.display = "block";

}

function deleteTask(id) {
    console.log(id)
    localStorage.removeItem(id);
    DipalyTasks();
}

DipalyTasks();

