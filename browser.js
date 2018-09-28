(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
var fs = require('fs');
var list = document.getElementById('words');
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
});
for (var i = 1; i <= 9; i++) {
    console.log(sorted[i][0] + " antal uppkomster: " + sorted[i][1]);
    var liNode = document.createElement("li");
    var newitem = document.createTextNode(sorted[i][0] + " antal uppkomster: " + sorted[i][1]);
    liNode.appendChild(newitem);
    list.appendChild(liNode);
}

},{"fs":1}]},{},[2]);
