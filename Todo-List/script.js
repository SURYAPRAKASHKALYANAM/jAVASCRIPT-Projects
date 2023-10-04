

let addBtn = document.getElementById("btn");
let task = document.getElementById("todo");
let tasksection = document.getElementById("task");
tasksection.innerHTML="";
let clearLocal = document.getElementById("btn1");

clearLocal.style.display = "none";

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
    let e=1;
    for(let key in localStorage){
        e=0;
        if(key>=0)  tasksection.innerHTML+=`<li><p>${localStorage[key]}<img src="./remov.svg" alt="remove" id=${key} onclick=setclick(${key})></p></li>`;
    }
    if (e==0) clearLocal.style.display = "block";
    else clearLocal.style.display = "none";
}

function deleteTask(id) {
    localStorage.removeItem(id);
    DipalyTasks();
}

DipalyTasks();

