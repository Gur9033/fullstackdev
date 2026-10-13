const taskInput = document.querySelector(".input");
const taskList = document.querySelector(".task-list");

function Add()
{
    if(taskInput.value==="")
    {
        alert("Please Enter your Task");
    }
    else
    {
        const newEle =document.createElement('li');
        newEle.innerHTML = `
        <span class="task-text">${taskInput.value}</span> 
        <button class="delete-btn">Delete</button>`;
        taskList.appendChild(newEle);
        taskInput.value="";
        //Delete button
        const deleteBtn = newEle.querySelector(".delete-btn");
        deleteBtn.addEventListener("click",function()
    {
        newEle.remove();
    });
    }
}
