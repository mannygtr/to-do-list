var workers = [];

function generateDOM() {

    var $h1 = $('<h1/>').text('LAZY WORKERS REMINDER').appendTo('body');

    var $ul = $('<ul/>').appendTo('body');

    var $li;

    for (var i = 0; i < 6; i++) {
        if (workers[i].name === null) {
            throw "Dude, you're missing something!";
        }

        if (workers[i].clockIn === true) {
            $li = $('<li/>').text(workers[i].name + ' ').append('✓').addClass('complete');
        } else {
            $li = $('<li/>').text(workers[i].name + ' ');
        }
        $ul.append($li);
    }
}

$(document).ready(function () {
    function Task(workername, clock) {
        var deadline = new Date();
        deadline.setDate(deadline.getDate() + 7);
        this.name = workername;
        this.clockIn = clock || false;
        this.date = deadline;
    }

    addTask('Jane', true);
    addTask('Mary');
    addTask('John', true);
    addTask('Paul');
    addTask('Mario');
    addTask('Luigi', true);

    function addTask(workername, clock) {
        var task = new Task(workername, clock);
        workers.push(task);
    }

    $('#add_task_btn').on('click', function (e) {
        e.preventDefault();
        var $new_task_input = $('#add_new_task');
        var new_task_description = $new_task_input.val();
        addTask(new_task_description);
        $new_task_input.val('');
        var $li2 = $('<li/>').text(new_task_description).appendTo('ul');
    });

    $('#archive_tasks').on('click', function (e) {
        e.preventDefault();
        removeCompleted();
    });

    generateDOM();
});

function removeCompleted() {
    $('li.complete').remove();
}


