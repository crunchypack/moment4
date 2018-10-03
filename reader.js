var fs = require('fs');
var sorted = [];
/**
 * Object called counter
 *
 */
var counter = /** @class */ (function () {
    function counter(name) {
        this.filename = name;
    }
    counter.prototype.showWords = function () {
        fs.readFile(this.filename, 'utf8', function (err, data) {
            if (err)
                throw err;
            var reg = /\W+/g; // Regular expression to get rid of unwanted symbols and whitespace
            var clean = data.split(reg); // Split using regex into array
            var count = {};
            for (var _i = 0, clean_1 = clean; _i < clean_1.length; _i++) { // Count words using asoc. array
                var i = clean_1[_i];
                count[i] = (count[i] || 0) + 1;
            }
            for (var key in count)
                sorted.push([key, count[key]]); // Sort the array
            sorted.sort(function (a, b) {
                return a[1] - b[1];
            });
            sorted.reverse(); // Reverse to descending order.
            for (var i = 0; i <= 9; i++) { // Show 10 most used words
                console.log((i + 1) + ". '" + sorted[i][0] + "' . Antal uppkomster: " + sorted[i][1]);
            }
        });
    };
    return counter;
}());
// Create object and call function to show wordcount
var wordCounter = new counter("hitch.txt");
wordCounter.showWords();
