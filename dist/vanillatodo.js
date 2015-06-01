
var myButton = document.getElementById("button")
var todoInput = document.getElementById("input")
var todoForm = document.getElementById("list")


var todoList = []
myButton.addEventListener('click', onButtonClick);


function onButtonClick(e){
	 todoForm.innerHTML = todoForm.innerHTML + "<br>" + todoInput.value;
	 todoInput.value = ""
	console.log(todoInput.value);
}
	

//     function onButtonClick(eventObj) {
    
//   document.getElementById('To do list').style.fontStyle="italic";
// }

// var myButton = document.getElementById('To do list');

// myButton.addEventListener('To do list', onButtonClick);

// var parent = document.getElementById('parent');
// parent.addEventListener('click', onButtonClick); 


