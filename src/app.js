const addListBtn = document.querySelector("#btn");
const textInput = document.querySelector("#textInput");
const title = document.querySelector("#title");

const listGroup =document.querySelector("#listGroup")

//process

const addList = () => {
  title.innerHTML = textInput.value;
  textInput.value = null;
};

//create Element List

const createNewList =() => {
    
const list = document.createElement("div");

list.classList.add("list");

list.innerHTML = `
<div class="px-3 mb-3 border border-2 py-2 flex flex-wrap justify-around items-center ">
    <input class="" type="checkbox">
    <p>
        san kyi tr pr
    </p>

    <div class="control">
        <button class="bg-[#f4fa9c] px-4 py-2 rounded-xl"><a href="#"><i
                    class="fa-solid fa-pencil"></i></a></button>
        <button class="bg-[#ff304f] px-4 py-2 rounded-xl"><a href="#"><i
                    class="fa-solid fa-trash"></i></a></button>
    </div>
</div>
`;

return list;
}



//delete function




//edit function


//mount list to listGroup

listGroup.append(createNewList())

//event

addListBtn.addEventListener("click", addList);

