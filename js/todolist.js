const deleted = document.getElementsByClassName("delete");
const list= document.getElementById("list");
const input= document.getElementById("input");
const item= document.getElementById("item");
const checked= document.getElementsByClassName("check");

let toDo = []

function trashItem(){
    list.removeChild(this);
}

function addToDo(itemValue){

    itemValue= input.value;
    toDo.push(itemValue)
    
    var li = document.createElement("li");
    const text= `<p class="text">${itemValue}</p>
                <input type="checkbox" class="check" >
                <input type="button" class="delete" value="Borrar"> `;
    li.innerHTML = text;
    li.classList.add('item')
    
    list.appendChild(li);
    addEvents(li)
}

function addEvents(item){
  item.addEventListener("click", trashItem);
}

document.addEventListener("keyup",(event)=>{ if(event.keyCode===13){addToDo()}});