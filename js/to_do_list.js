const inputBox= document.getElementById("input-box");
const listContainer= document.getElementById("list-container")

function addTask(){
    if(inputBox.value=== ""){
        alert("Please fill the input")
    }else{
        let li= document.createElement("li");
        li.innerHTML= inputBox.value;
        listContainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML= "\u00d7";
        li.appendChild(span)
    }
    inputBox.value = "";
    saveData()

}

// listContainer.addEventListener("click" , function(e){
//     if(e.target.tagname=== "SPAN"){
//         e.target.parentElement.remove();
//     }
// }, false)

listContainer.addEventListener("click", function(e){
    e.target.parentElement.remove();
    saveData()
   
})

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML= localStorage.getItem("data")
}

showTask()