document.getElementById("SubmitBtn").addEventListener("click", addToList);
document.getElementById("clearBtn").addEventListener("click", clearList);

function addToList(){
  let value = document.getElementById("todoimput").value
  if(value != "" && value != undefined)
  {
    let list = document.getElementById("list");
    let entry = document.createElement('li');
    entry.classList.add("incompleteItem");
    let buttonEntry = document.createElement('button');
    buttonEntry.innerText = "Remove";
    buttonEntry.onclick = function(){
      buttonEntry.parentElement.parentElement.removeChild(buttonEntry.parentElement);
    }

    let completeBtnEntry = document.createElement("button");
    completeBtnEntry.innerText = "Complete";
    completeBtnEntry.classList.add("completeBtn");
    completeBtnEntry.onclick = function(){
      let element = completeBtnEntry.parentElement;
      if(element.classList.contains("incompleteItem")){
        element.classList.remove("incompleteItem");
        element.classList.add("completeItem");
        element.getElementsByClassName("completeBtn")[0].innerText = "Incomplete"
      }
      else{
        element.classList.remove("completeItem");
        element.classList.add("incompleteItem");
        element.getElementsByClassName("completeBtn")[0].innerText = "Complete  "
      }
    }

    let textEntry = document.createElement("label");
    textEntry.classList.add("textEntry")
    textEntry.innerHTML = value;
    //entry.appendChild(document.createTextNode(value));
    entry.appendChild(textEntry);
    entry.appendChild(buttonEntry);
    entry.appendChild(completeBtnEntry);
    list.appendChild(entry);
    document.getElementById("todoimput").value = '';
    document.getElementById('todoimput').focus();
  }
} 

function clearList(){
  let list = document.getElementById("list");
  list.innerHTML = '';
  document.getElementById("todoimput").value = '';
  document.getElementById('todoimput').focus();
}


