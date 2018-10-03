declare function require (name:string); // Make it possible to use require in TypeScript
var fs = require('fs');
var sorted = [];
/**
 * Object called counter
 * 
 */
class counter {
    filename: string;

    constructor(name: string) {
        this.filename = name;
    } 

    showWords(): void {
        fs.readFile(this.filename, 'utf8', function(err, data ){ // Reads in file using the filename 
            if(err) throw err;
            let reg: RegExp = /\W+/g;       // Regular expression to get rid of unwanted symbols and whitespace
            let clean = data.split(reg);    // Split using regex into array
            let count = {};
            for(let i of clean){    // Count words using asoc. array
                count[i] = (count[i]||0) + 1;
            }
            
            for(let key in count) sorted.push ([key, count[key]]); // Sort the array
            sorted.sort(function (a, b){
                return a[1] - b[1]
            });
            sorted.reverse();               // Reverse to descending order.
            for(let i = 0; i <= 9; i++){    // Show 10 most used words
                console.log((i+1) + ". '"+sorted[i][0]+ "' . Antal uppkomster: "+  sorted[i][1]);
            }
        
        });  
    }
}

// Create object and call function to show wordcount
let wordCounter = new counter("hitch.txt");
wordCounter.showWords();




