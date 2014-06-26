var workers=[{
    name:"Jane",
    start:"09.00 am",
    clockIn:true
},{
    name:"Mary",
    start:"09.00 am",
    clockIn:false
},{
    name:"John",
    start:"09.00 am",
    clockIn:false
},{
    name:"Paul",
    start:"09.00 am",
    clockIn:true
},{
    name:"Paul",
    start:"09.00 am",
    clockIn:true
},{
    name:"Luigi",
    start:"09.00 am",
    clockIn:false
}];
document.write('<h1>LAZY WORKERS REMINDER</h1>');
document.write('<ul>');
for (var j = 0; j < workers.length; j++) {
    if(workers[j].name!==null&&workers[j].start!==null&&workers[j].clockIn!==null){
        document.write('<li>' + workers[j].name +  '</li>');} 
    else {
throw "We got some incomplete data, dude.";
}
}
console.log(workers);
document.write('</ul>');