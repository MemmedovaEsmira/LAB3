let toDoEntryButton = document.querySelector(".toDo_entry_button");
let toDoEntryInput = document.querySelector(".toDo_entry_input");
let toDoPlanList = document.querySelector(".toDo_plan_list");  

toDoEntryButton.addEventListener("click", () => {
    let toDoPlanListItem = document.createElement("li");
    toDoPlanListItem.innerText = toDoEntryInput.value.trim(); 
    toDoPlanListItem.classList.add("toDoPlanListItem");

    let toDoPlanRemoveButton = document.createElement("p");
    toDoPlanRemoveButton.innerText = "x"; 
    toDoPlanRemoveButton.classList.add("toDoPlanRemoveButton");

    let toDoPlanListWrapper = document.createElement("div");
    toDoPlanListWrapper.classList.add("toDoPlanListWrapper");

    toDoPlanListWrapper.appendChild(toDoPlanListItem);
    toDoPlanListWrapper.appendChild(toDoPlanRemoveButton)

    if (toDoEntryInput.value.length > 0) {
        toDoPlanList.appendChild(toDoPlanListWrapper);
    }
    else{
        alert("please fill in the box");
    }

    toDoPlanRemoveButton.addEventListener("click", ()=>{
        toDoPlanListWrapper.remove()
    })
    toDoEntryInput.value = ""
});



