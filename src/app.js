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

//create list
const addList = () => {
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
  list.id = "list" + Date.now();

  list.classList.add("list");

  list.innerHTML = `
<div class="px-3 mb-3 border animate__animated  animate__zoomIn border-2 py-2 flex flex-wrap justify-around items-center ">
    <input class="list-done-check accent-[#3f3b3b]" type="checkbox">
    <p class="font-serif list-task ">
        ${currentTask}
    </p>

    <div class="control">
        <button  class="list-edit border-2  px-4 py-2 rounded-xl  active:scale-80 duration-100 disabled:opacity-25">
        <i class="fa-solid fa-pencil pointer-events-none"></i></button>

        <button  class="list-delete border-2  px-4 py-2 rounded-xl active:scale-80 duration-100"><i
                    class="fa-solid fa-trash  pointer-events-none"></i></button>
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

const deletList = (ListId, text) => {
  const currentList = document.querySelector(`#${ListId}`);
  // console.log(currentList);
  if (window.confirm(`Are you sure to delete..? \n${text}`)) {
    currentList.classList.add("animate__animated", "animate__hinge");

    //animation event ဖမ်းပြီးတော့ သူတို့ နေရာတွေမှာ ပြန်ထားပေးတာဖြစ်ပါတယ်
    currentList.addEventListener("animationend", () => {
      currentList.remove();
      updateDoneTaskTotal();
      updateTaskTotal();
    });
  }
};

//action (Business logic)

//edit list Function
const editList = (currentlist) => {
  const listDone = currentlist.querySelector(".list-done-check");
  const listTask = currentlist.querySelector(".list-task");
  const listEditBtn = currentlist.querySelector(".list-edit");

  listEditBtn.setAttribute("disabled", true);
  listDone.setAttribute("disabled", true);

  const currentTask = listTask.innerText;
  const newTaskInput = document.createElement("input");
  newTaskInput.className =
    "border border-2 px-3 w-[180px] focus-visible:outline-none";
  newTaskInput.value = currentTask;
  listTask.after(newTaskInput);
  newTaskInput.focus();
  listTask.classList.add("hidden");

  const events = ["change", "blur"];

  events.forEach((event) => {
    newTaskInput.addEventListener(event, () => {
      listEditBtn.removeAttribute("disabled");
      listDone.removeAttribute("disabled");

      listTask.innerText = newTaskInput.value;
      listTask.classList.remove("hidden");

      newTaskInput.remove();
    });
  });
};

const doneList = (currentlist) => {
  const listDone = currentlist.querySelector(".list-done-check");
  const listTask = currentlist.querySelector(".list-task");

  const listDeleteBtn = currentlist.querySelector(".list-delete");
  const listEditBtn = currentlist.querySelector(".list-edit");

  // console.log(currentTask+"is done")
  listTask.classList.toggle("line-through");
  currentlist.classList.toggle("opacity-20");
  currentlist.classList.toggle("scale-90");
  currentlist.classList.add("duration-200");

  if (listDone.checked) {
    listEditBtn.setAttribute("disabled", true);
  } else {
    listEditBtn.removeAttribute("disabled");
  }
  updateDoneTaskTotal();
};

//handler
//mount list to listGroup
const listGroupHandler = (event) => {
  //event bubbling နဲ့ထိန်းပြီး parent တွေကို ပြန်ခေါ်သုံးတာ
  const list = event.target.closest(".list"); //အရင်ဆုံး list ထဲမှာရှိတဲ့ ကောင်တွေကို event target သုံးပြီးပြန်ခေါ်သုံးတာ
  const currentTask = list.querySelector(".list-task").innerText;

  //delete action
  if (event.target.classList.contains("list-delete")) {
    //contains ဆိုတာက စစ်ဆေးတဲ့ function တစ်ခုဖြစ်ပြီး ပါ မပါ စစ်ပေးတဲ့ အရာဖြစ်ပါတယ်
    const listId = event.target.closest(".list").id;
    deletList(listId, currentTask);
  }

  ///edit function
  if (event.target.classList.contains("list-edit")) {
    editList(list);
  }

  //check function

  if (event.target.classList.contains("list-done-check")) {
    // console.log("check");
    doneList(list);
  }
};

//event

if (textInput.value === "" || textInput.value.trim()) {
} else {
  addListBtn.addEventListener("click", addList);
}

listGroup.addEventListener("click", listGroupHandler);
