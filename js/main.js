var workers = [{
    name: "Jane",
    start: "09.00 am",
    clockIn: true
}, {
    name: "Mary",
    start: "09.00 am",
    clockIn: false
}, {
    name: "John",
    start: "09.00 am",
    clockIn: false
}, {
    name: "Paul",
    start: "09.00 am",
    clockIn: true
}, {
    name: "Mario",
    start: "09.00 am",
    clockIn: true
}, {
    name: "Luigi",
    start: "09.00 am",
    clockIn: false
}];

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