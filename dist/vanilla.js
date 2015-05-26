 $(document).on('ready', start);

function start(e) {

    var $inputBox = $('#todo-input');
   
    var $todoButton = $('#add-todo-button');
   
    var $todoForm = $('#todo-form');

    var list = [];


    $todoForm.on('submit', addTodo);
    
    
    function addTodo(e) {
        e.preventDefault();

        list.push($inputBox.val());
        $inputBox.val('');

        console.log(list);
    }