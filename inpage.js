function store(){ 
    var title = document.getElementById('title').value;
    var description = document.getElementById('description').value;
    var key = document.getElementById('key').value;
    var image = document.getElementById('image').value;


    const car = {
        title: title,
        description: description,
        image:image,
    }

    window.localStorage.setItem(key,JSON.stringify(car));  
}

function retrieveRecords(){ 
    var key = document.getElementById('retrieveKey').value; 
    console.log("retrive records");
    var records = window.localStorage.getItem(key); 
    var paragraph = document.createElement("p");
    var infor = document.createTextNode(records);
    paragraph.appendChild(infor);
    var element = document.getElementById("retrieve");
    element.appendChild(paragraph);
}

function removeItem(){ 
    var key = document.getElementById('removeKey').value; 
    localStorage.removeItem(key) 
    console.log("remove items");
}

function clearStorage(){ 
    localStorage.clear()
    console.log("clear records");
}

window.onload =function(){ 
    document.getElementById("userData").onsubmit = store
    document.getElementById("clearButton").onclick = clearStorage
    document.getElementById("removeButton").onclick = removeItem
    document.getElementById("view").onclick = retrieveRecords
}
