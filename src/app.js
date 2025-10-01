const btn = document.querySelector("#btn")
const textinput = document.querySelector("#textinput")
const title = document.querySelector("#title")


function addlist(){
    title.innerHTML = textinput.value
    textinput.value=""

}

btn.addEventListener("click",addlist)