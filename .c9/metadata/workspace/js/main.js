{"filter":false,"title":"main.js","tooltip":"/js/main.js","undoManager":{"mark":0,"position":0,"stack":[[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":6,"column":0},"end":{"row":6,"column":24}},"text":"document.write('</ul>');"},{"action":"removeLines","range":{"start":{"row":0,"column":0},"end":{"row":6,"column":0}},"nl":"\r\n","lines":["var workers = ['Jane', 'Mary', 'John', 'Paul', 'Mario', 'Luigi'];","document.write('<h1>LAZY WORKERS REMINDER</h1>');","document.write('<ul>');","for (var j = 0; j < workers.length; j++) {","    document.write('<li>' + workers[j] + ': go to work!!!!' + '</li>');","}"]},{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":14}},"text":"var workers=[{"},{"action":"insertText","range":{"start":{"row":0,"column":14},"end":{"row":1,"column":0}},"text":"\r\n"},{"action":"insertLines","range":{"start":{"row":1,"column":0},"end":{"row":35,"column":0}},"lines":["    name:\"Jane\",","    start:\"09.00 am\",","    clockIn:true","},{","    name:\"Mary\",","    start:\"09.00 am\",","    clockIn:false","},{","    name:\"John\",","    start:\"09.00 am\",","    clockIn:false","},{","    name:\"Paul\",","    start:\"09.00 am\",","    clockIn:true","},{","    name:\"Paul\",","    start:\"09.00 am\",","    clockIn:true","},{","    name:\"Luigi\",","    start:\"09.00 am\",","    clockIn:false","}];","document.write('<h1>LAZY WORKERS REMINDER</h1>');","document.write('<ul>');","for (var j = 0; j < workers.length; j++) {","    if(workers[j].name!==null&&workers[j].start!==null&&workers[j].clockIn!==null){","        document.write('<li>' + workers[j].name +  '</li>');} ","    else {","throw \"We got some incomplete data, dude.\";","}","}","console.log(workers);"]},{"action":"insertText","range":{"start":{"row":35,"column":0},"end":{"row":35,"column":24}},"text":"document.write('</ul>');"}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":35,"column":24},"end":{"row":35,"column":24},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1403789346000,"hash":"63f467afdc28423ca1fee61ca078cb97f26f457c"}