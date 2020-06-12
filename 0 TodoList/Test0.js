window.onload = function() {
    var todoList = [];

    if (localStorage.getItem('todo') != undefined) {
        todoList = JSON.parse(localStorage.getItem('todo'));
        out();
    }

    this.document.getElementById('add').onclick = function () {
        // {task, check(false/true), }
        var data  = document.getElementById('in').value;

        if (data == "") {
            alert("Enter task");
            return;
        }

        var temp = {};
        
        temp.task = data;
        temp.check = false;
        temp.checkBox = '<input type="checkbox" name="cbox">';

        for (var key in todoList) {
            if (todoList[key].check == true) {
                todoList[key].checkBox = '<input type="checkbox" name="cbox" checked>';
            } else {
                todoList[key].checkBox = '<input type="checkbox" name="cbox">';
            }
        }

        todoList.push(temp);
        out();
        
    }

    this.document.getElementById('done').onclick = function () {
        check();
        // var outd = "";
        for (var i = 0; i < todoList.length; i++) {
            if (todoList[i].check == true) {

                todoList[i].task = '<span class="underlined">' + todoList[i].task + '</span>';
            }
        }
        out();
    }

    this.document.getElementById('del').onclick = function () {
        check();
        for (var i = todoList.length - 1; i >= 0; i--) {
            if (todoList[i].check) {
                todoList.splice(i, 1);
            }
        }
        out();
    }

    this.document.getElementById('clear').onclick = function () {
        todoList = [];
        out();
    }

    function check() {
        var allBoxes = document.getElementsByName('cbox');
        window.onclick = function() {
            for(var i=0; i<allBoxes.length; i++) {
                if (allBoxes[i].checked) {
                    todoList[i].check = true;
                } else {
                    todoList[i].check = false;
                }
            }
        }
    }   

    function out() {
        check();
        var out = '';
        for (var i = 0; i < todoList.length; i++) {
            out += todoList[i].checkBox;
            out += todoList[i].task + '<br>';
        }
        document.getElementById('out').innerHTML = out;
        localStorage.setItem('todo', JSON.stringify(todoList))
    }
}
