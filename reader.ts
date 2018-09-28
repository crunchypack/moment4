declare function require (name:string);
var fs = require('fs');
//var list = document.getElementById('words');
var sorted = [];


fs.readFile('hitch.txt', 'utf8', function(err, data ){
    if(err) throw err;
    let reg: RegExp = /\n| /;
    let clean = data.split(reg);
    let count = {};
    for(let i of clean){
        count[i] = (count[i]||0) + 1;
    }
    
    for(let key in count) sorted.push ([key, count[key]]);
    sorted.sort(function (a, b){
        return a[1] - b[1]
    });
    sorted.reverse();
    for(let i = 1; i <= 9; i++){
        console.log(i + ". '"+sorted[i][0]+ "' . Antal uppkomster: "+  sorted[i][1]);
    }

});



/* var liNode = document.createElement("li");
var newitem = document.createTextNode(sorted[i][0]+ " antal uppkomster: "+  sorted[i][1]);
liNode.appendChild(newitem);
list.appendChild(liNode); */