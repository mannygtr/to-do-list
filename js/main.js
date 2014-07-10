var workers = [];

function Task(workername) {
	var deadline = new Date();
	deadline.setDate(deadline.getDate() + 7);
    return {
        name: workername,
        clockIn: false,
        date: deadline,
    }
}

addTask('Jane');
addTask('Mary');
addTask('John');
addTask('Paul');
addTask('Mario');
addTask('Luigi');

function addTask(workername) {
    var task = new Task(workername);
    workers.push(task);
}

$(document).ready(function () {
    generateDOM();
});

function generateDOM() {

    var $h1 = $('<h1/>').text('LAZY WORKERS REMINDER').appendTo('body');

    var $ul = $('<ul/>').appendTo('body');

    var $li;

    for (var i = 0; i < 6; i++) {
        if (workers[i].name == null) {
            throw "Dude, you're missing something!";
        }

        if (workers[i].clockIn === true) {
            $li = $('<li/>').text(workers[i].name + ' ').append('<i class="glyphicon glyphicon-ok"></i>').addClass('complete');
        } else {
            $li = $('<li/>').text(workers[i].name + ' ');
        }
        $ul.append($li)
        $('li.complete').remove();
    }
}