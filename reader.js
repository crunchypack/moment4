var fs = require('fs');
//var list = document.getElementById('words');
var sorted = [];
fs.readFile('hitch.txt', 'utf8', function (err, data) {
    if (err)
        throw err;
    var reg = /\n| /;
    var clean = data.split(reg);
    var count = {};
    for (var _i = 0, clean_1 = clean; _i < clean_1.length; _i++) {
        var i = clean_1[_i];
        count[i] = (count[i] || 0) + 1;
    }
    for (var key in count)
        sorted.push([key, count[key]]);
    sorted.sort(function (a, b) {
        return a[1] - b[1];
    });
    sorted.reverse();
    for (var i = 1; i <= 9; i++) {
        console.log(i + ". '" + sorted[i][0] + "' . Antal uppkomster: " + sorted[i][1]);
    }
});
/* var liNode = document.createElement("li");
var newitem = document.createTextNode(sorted[i][0]+ " antal uppkomster: "+  sorted[i][1]);
liNode.appendChild(newitem);
list.appendChild(liNode); */ 
