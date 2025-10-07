const addListBtn = document.querySelector("#btn");
const textInput = document.querySelector("#textInput");
const title = document.querySelector("#title");
const taskTotal = document.querySelector("#taskTotal");
const doneTaskTotal = document.querySelector("#doneTaskTotal");

const editBtn = document.querySelector("#edit");

const listGroup = document.querySelector("#listGroup");

//process

textInput.addEventListener("change", () => {
  addList();
});

const addList = () => {
  //   title.innerHTML = textInput.value;
  listGroup.append(createNewList(textInput.value));

  textInput.value = null;
  updateTaskTotal();
};

const updateTaskTotal = () => {
  //count List
  const list = document.querySelectorAll(".list");
  taskTotal.innerHTML = list.length;
};

const updateDoneTaskTotal = () => {
  //count List and update
  const list = document.querySelectorAll(".list input:checked");
  doneTaskTotal.innerHTML = list.length;
};

//create Element List

const createNewList = (currentTask) => {
  const list = document.createElement("div");

  list.classList.add("list");

  list.innerHTML = `
<div class="px-3 mb-3 border border-2 py-2 flex flex-wrap justify-around items-center ">
    <input class="list-done-check accent-[#3f3b3b]" type="checkbox">
    <p class="font-serif list-task ">
        ${currentTask}
    </p>

    <div class="control">
        <button  class="list-edit bg-[#f4fa9c] px-4 py-2 rounded-xl disabled:opacity-25"><i
                    class="fa-solid fa-pencil pointer-events-none"></i></button>

        <button  class="list-delete bg-[#ff304f] px-4 py-2 rounded-xl"><i
                    class="fa-solid fa-trash pointer-events-none"></i></button>
    </div>
</div>
`;

  // const listDone = list.querySelector(".list-done-check");
  // const listTask = list.querySelector(".list-task");

  // const listDeleteBtn = list.querySelector(".list-delete");
  // const listEditBtn = list.querySelector(".list-edit");

  // listDone.addEventListener("change", () => {
  //   // console.log(currentTask+"is done")
  //   updateDoneTaskTotal();
  //   listTask.classList.toggle("line-through");
  //   list.classList.toggle("opacity-20");
  //   list.classList.toggle("scale-90");
  //   list.classList.add("duration-200");

    
  //   if(listDone.checked){
  //   listEditBtn.setAttribute("disabled",true)

  //   }else{
  //   listEditBtn.removeAttribute("disabled")

  //   }
  // });

  // listDeleteBtn.addEventListener("click", () => {
  //   if (window.confirm("Are you sure to delete..? " + `"${currentTask}"`)) {
  //     list.remove();
  //   }
  // });

  // listEditBtn.addEventListener("click", () => {
  //   listEditBtn.setAttribute("disabled",true)
  //   listDone.setAttribute("disabled",true)
    
  //   // console.log("edit");
  //   const newTaskInput = document.createElement("input");
  //   newTaskInput.className =
  //     "border border-2 px-3 w-[180px] focus-visible:outline-none";
  //   newTaskInput.value = currentTask;
  //   listTask.after(newTaskInput);
  //   newTaskInput.focus();
  //   listTask.classList.add("hidden");

  //   newTaskInput.addEventListener("change", () => {
  //   listEditBtn.removeAttribute("disabled")
  //   listDone.removeAttribute("disabled")


  //     listTask.innerText = newTaskInput.value;
  //     listTask.classList.remove("hidden");

  //     newTaskInput.remove();
  //     // console.log("edit done")
  //   });
  // });
  return list;
  
};


//mount list to listGroup

const listGroupHandler =(event) => {
  const list = event.target.closest(".list")

 if(event.target.classList.contains("list-delete")){
    if (window.confirm("Are you sure to delete..? ")) {
      list.remove();
      updateDoneTaskTotal()
      updateTaskTotal()
    }
 }

 ///edit function
 if(event.target.classList.contains("list-edit")){

  const listDone = list.querySelector(".list-done-check");
  const listTask = list.querySelector(".list-task");
  const listEditBtn = list.querySelector(".list-edit");
   
    listEditBtn.setAttribute("disabled",true)
    listDone.setAttribute("disabled",true)

    const currentTask = listTask.innerText ;
    const newTaskInput = document.createElement("input");
    newTaskInput.className =
      "border border-2 px-3 w-[180px] focus-visible:outline-none";
    newTaskInput.value = currentTask;
    listTask.after(newTaskInput);
    newTaskInput.focus();
    listTask.classList.add("hidden");

    newTaskInput.addEventListener("change", () => {
    listEditBtn.removeAttribute("disabled")
    listDone.removeAttribute("disabled")


      listTask.innerText = newTaskInput.value;
      listTask.classList.remove("hidden");

      newTaskInput.remove();
      
    }); 

 }


 //check function

 if(event.target.classList.contains("list-done-check")){
  console.log("check")


const listDone = list.querySelector(".list-done-check");
  const listTask = list.querySelector(".list-task");

  const listDeleteBtn = list.querySelector(".list-delete");
  const listEditBtn = list.querySelector(".list-edit");

 
    // console.log(currentTask+"is done")
    listTask.classList.toggle("line-through");
    list.classList.toggle("opacity-20");
    list.classList.toggle("scale-90");
    list.classList.add("duration-200");

    
    if(listDone.checked){
    listEditBtn.setAttribute("disabled",true)

    }else{
    listEditBtn.removeAttribute("disabled")

    }
    updateDoneTaskTotal();

 }


}

//event

addListBtn.addEventListener("click", addList);
listGroup.addEventListener("click",listGroupHandler);
