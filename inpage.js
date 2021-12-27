// function store(){ 
//     var title = document.getElementById('title').value;
//     var description = document.getElementById('description').value;
//     var key = document.getElementById('key').value;
//     var image = document.getElementById('image').value;


//     const car = {
//         title: title,
//         description: description,
//         image:image,
//     }

//     window.localStorage.setItem(key,JSON.stringify(car));  
// }

// function retrieveRecords(){ 
//     var key = document.getElementById('retrieveKey').value; 
//     console.log("retrive records");
//     var records = window.localStorage.getItem(key); 
//     var paragraph = document.createElement("p");
//     var infor = document.createTextNode(records);
//     paragraph.appendChild(infor);
//     var element = document.getElementById("retrieve");
//     element.appendChild(paragraph);
// }

// function removeItem(){ 
//     var key = document.getElementById('removeKey').value; 
//     localStorage.removeItem(key) 
//     console.log("remove items");
// }

// function clearStorage(){ 
//     localStorage.clear()
//     console.log("clear records");
// }

// window.onload =function(){ 
//     document.getElementById("userData").onsubmit = store
//     document.getElementById("clearButton").onclick = clearStorage
//     document.getElementById("removeButton").onclick = removeItem
//     document.getElementById("view").onclick = retrieveRecords
// }


// var a=document.querySelector("title")
// var b = document.querySelector("#sanjay1");
// b.onclick= function(){
//  localStorage.setItem("keyy", a.value);
// }


// var c = document.querySelector("#sanjay2");
// c.value= localStorage.getItem("keyy");

var  c =document.querySelector("#btn1");
var d = document.querySelector("#txt1");
c.onclick=function(){
    d.value = parseInt(d.value)+1;
}


var  e =document.querySelector("#btn2");
var f = document.querySelector("#txt2");
e.onclick=function(){
    f.value = parseInt(f.value)+1;
}


var  g =document.querySelector("#btn3");
var h = document.querySelector("#txt3");
g.onclick=function(){
    h.value = parseInt(h.value)+1;
}

var  i =document.querySelector("#btn4");
var j = document.querySelector("#txt4");
i.onclick=function(){
    j.value = parseInt(j.value)+1;
}

var deletebtn1= document.querySelector("#deletebtn1");
var delete1 = document.querySelector("#delete1");
deletebtn1.onclick =function(){

    delete1.remove();
}

var deletebtn2=  document.querySelector("#deletebtn2");
var delete2 = document.querySelector("#delete2");
deletebtn2.onclick =function(){
    delete2.remove();
}

var deletebtn3=  document.querySelector("#deletebtn3");
var delete3 = document.querySelector("#delete3");
deletebtn3.onclick =function(){
    delete3.remove();
}
var deletebtn4=  document.querySelector("#deletebtn4");
var delete4 = document.querySelector("#delete4");
deletebtn4.onclick =function(){
    delete4.remove();
}

