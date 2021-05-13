var fs = require("fs");
var readline = require("readline");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

if (!fs.existsSync("greetings.txt")) {
    console.log("File not found");
    rl.close();
} else {
    var greetingsFile = fs.readFileSync("greetings.txt");
    var greetings_string = greetingsFile.toString();
    var greetings = greetings_string.split("\n");
    rl.question("What is your name? ", function(name) {
        for (var i = 0; i < 1; i++) {
            var n = Math.floor(Math.random() * greetings.length);
            console.log(greetings[n]);
            console.log(name);
        }
        rl.close();
    });
}