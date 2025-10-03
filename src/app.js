const addListBtn = document.querySelector("#btn");
const textInput = document.querySelector("#textInput");
const title = document.querySelector("#title");
const taskTotal =document.querySelector("#taskTotal")
const doneTaskTotal =document.querySelector("#doneTaskTotal")


const editBtn =document.querySelector("#edit")

const listGroup =document.querySelector("#listGroup")

//process

const addList = () => {
//   title.innerHTML = textInput.value;
  listGroup.append(createNewList(textInput.value))

  textInput.value = null;
    updateTaskTotal();

};

const updateTaskTotal=() => {
      //count List
  const list = document.querySelectorAll(".list");
    taskTotal.innerHTML=list.length;
}

const updateDoneTaskTotal=() => {
      //count List and update
  const list = document.querySelectorAll(".list input:checked");
    doneTaskTotal.innerHTML=list.length;
}

//create Element List

const createNewList =(currentTask) => {
    
const list = document.createElement("div");

list.classList.add("list");



list.innerHTML = `
<div class="px-3 mb-3 border border-2 py-2 flex flex-wrap justify-around items-center ">
    <input class="list-done-check accent-[#3f3b3b]" type="checkbox">
    <p class="font-serif list-task">
        ${currentTask}
    </p>

    <div class="control">
        <button  class="list-edit bg-[#f4fa9c] px-4 py-2 rounded-xl"><a href="#"><i
                    class="fa-solid fa-pencil"></i></a></button>

        <button  class="list-delete bg-[#ff304f] px-4 py-2 rounded-xl"><a href="#"><i
                    class="fa-solid fa-trash"></i></a></button>
    </div>
</div>
`;

const listDone=list.querySelector(".list-done-check")
const listThrough=list.querySelector(".list-task")

const listDeleteBtn=list.querySelector(".list-delete")
const listEditBtn =list.querySelector(".list-edit")




listDone.addEventListener("change",() => {
    // console.log(currentTask+"is done")    
    updateDoneTaskTotal();
    listThrough.classList.toggle("line-through")
    list.classList.toggle("opacity-20")
    list.classList.toggle("scale-90")
    list.classList.add("duration-200")


})

listDeleteBtn.addEventListener("click",() => {
    if(window.confirm("Are you sure to delete..?")){
        list.remove();
    }
})

listEditBtn.addEventListener("click",() => {
    console.log("edit")
    const newTaskInput =document.createElement("input")
    newTaskInput.className="border border-2 px-3 focus-visible:outline-none"
    list.after(newTaskInput)
    newTaskInput.value=currentTask;
})
return list;
}



//delete function




//edit function


//mount list to listGroup


//event

addListBtn.addEventListener("click", addList);
// editBtn.addEventListener("click",edit);

