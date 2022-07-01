const form = document.querySelector("#yeniGorev");
const input = document.querySelector("#txtYeniGorev");
const btnDeleteAll = document.querySelector("#btnTümünüSil");
const todoList = document.querySelector("#todo-list");
const islemde = document.querySelector("#islemde"); 
const tamamlandi = document.querySelector("#tamamlandi");

let bgColor = true;


addAllEventListener();

function addAllEventListener() 
{
    form.addEventListener('submit', addNewItem);
    todoList.addEventListener('click', deleteItem);
    islemde.addEventListener('click', deleteItem);
    tamamlandi.addEventListener('click', deleteItem);
    btnDeleteAll.addEventListener('click', deleteAllItems);

}  


function addNewItem(e) 
{
    e.preventDefault();

    if (input.value === '') 
    {
        alert("Yeni Görev Giriniz!");
        return;
    }  


    const li = document.createElement("li");
    if (bgColor) 
    {
        li.classList = 'list-group-item list-group-item';
        bgColor = false;
    } 
    else
    {
        li.classList = 'list-group-item list-group-item-secondary';
        bgColor = true;
    }
    li.setAttribute("id",Math.random());
    li.setAttribute("draggable","true");
    li.setAttribute("ondragstart","drag(event)");
    li.appendChild(document.createTextNode(input.value));

    const a = document.createElement("a");
    a.classList = 'delete-item float-end';
    a.setAttribute('href', '#');
    a.setAttribute('onclick','deleteItem()');
    a.innerHTML = '<i class="bi bi-archive"></i>';
    
    li.appendChild(a);
    todoList.appendChild(li);
}



function deleteItem(e) 
{
    e.preventDefault();

    if (e.target.className == 'bi bi-archive') 
    {
        if (confirm('Seçili Görev Siliniyor!')) 
        {
            e.target.parentElement.parentElement.remove();
        }

    }
}
function deleteAllItems() 
{  
    
     
    if (confirm('Tüm Görevler Siliniyor'))
    {
        tamamlandi.innerHTML = "";
    }

}
function allowDrop(e) {
    e.preventDefault();
}
function drag(ev) {
    // console.log(ev.target.id);
    // console.log(ev.target);
    ev.dataTransfer.setData("id", ev.target.id);
}
function birak(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("id");
    // console.log("Drop oldu data değeri : " + data);
    e.target.appendChild(document.getElementById(data));
}