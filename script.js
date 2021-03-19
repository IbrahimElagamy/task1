var taskInput = document.getElementById('task'),
    addBtn = document.getElementById('addTask'),
    allTasks = document.getElementById('allTasks'),
    noTask = document.getElementById('noTask');
    showModal = document.getElementById('showModal'),
    modal = document.getElementById('exampleModal');

    let showNoTask = () => {
        if (allTasks.childNodes.length == 0) {
            noTask.style.display = "block"
        } else {
            noTask.style.display = "none"
        }
    }
    var addTask = () =>{
        var task = taskInput.value

        if (task.trim() == '' || taskInput.value.length <2){
            alert("you Must Valid Data")
        }else{
            noTask.style.display = "none"

            alertTask = document.createElement('div')
            alertTask.classList = 'task alert alert-info mx-auto col-4 m-4';
            alertTask.append(task)

        var deleteBtn = document.createElement('button')
            deleteBtn.classList = "btn btn-danger float-right delete"
            deleteBtn.innerText = "Delete"
            alertTask.append(deleteBtn)

            allTasks.append(alertTask)
            taskInput.value = ''
            
        }
    }
    document.addEventListener('click', (ev) => {
        if (ev.target.classList.contains('delete')) {
            ev.target.parentElement.remove();
            showNoTask()
        }
    })
    
    addBtn.addEventListener("click", addTask)
