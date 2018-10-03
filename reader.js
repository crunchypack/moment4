var fs = require('fs');
var sorted = [];
var counter = /** @class */ (function () {
    function counter(name) {
        this.filename = name;
    }
    counter.prototype.showFile = function () {
        fs.readFile(this.filename, 'utf8', function (err, data) {
            if (err)
                throw err;
            var reg = /\W+/g;
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
            for (var i = 0; i <= 9; i++) {
                console.log((i + 1) + ". '" + sorted[i][0] + "' . Antal uppkomster: " + sorted[i][1]);
            }
        });
    };
    return counter;
}());
var wordCounter = new counter("hitch.txt");
wordCounter.showFile();
