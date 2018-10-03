declare function require (name:string);
var fs = require('fs');
var sorted = [];

class counter {
    filename: string;

    constructor(name: string) {
        this.filename = name;
    } 

    showFile(): void {
        fs.readFile(this.filename, 'utf8', function(err, data ){
            if(err) throw err;
            let reg: RegExp = /\W+/g;
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
            for(let i = 0; i <= 9; i++){
                console.log((i+1) + ". '"+sorted[i][0]+ "' . Antal uppkomster: "+  sorted[i][1]);
            }
        
        });  
    }
}

let wordCounter = new counter("hitch.txt");
wordCounter.showFile();




