
var myButton = document.getElementById("button")
var todoInput = document.getElementById("input")
var todoForm = document.getElementById("list")


var todoList = []
myButton.addEventListener('click', onButtonClick);


function onButtonClick(e){

	 todoForm.innerHTML = todoForm.innerHTML + "<li>" + todoInput.value + "</li>";
	 todoInput.value = ""
	 console.log(todoInput.value);
}
	
