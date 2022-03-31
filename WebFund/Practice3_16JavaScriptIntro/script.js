//blueprint
//function definition
function myFunction(){
    // whatever work we want to do
    console.log("Hello World");
}

//function call
myFunction();

function changeColor(element){
    element.style.color ="red" 
};

//a click or hover over is called a Java Script event
function hide(element){
    element.remove()
};

function changeImage(unicorn){
    unicorn.src = "images/h5mk7js_cat-generic_625x300_28_August_20.jpg"
};

function changeImageBack(variable){
    variable.src = "images/KittenImg.jpg"
};

function like(counter){
    document.querySelector(counter).innerText++;
};

function timeOut(){
    setTimeout(myAlert,5000)
}

function myAlert(){
    alert("5 seconds later...")
}

//Java Script Events
onclick
onmouseover
onmouseout
//Built In Funtions
.remove()
.alert()