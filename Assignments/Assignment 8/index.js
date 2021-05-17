var fs = require("fs");
var buf = Buffer.alloc(1024);


fs.open("input.txt", "r+", function(err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("\tOpening the file.......");
    var data = fs.readFileSync("input.txt");
    console.log(data.toString());
    console.log("\n\tTruncating the file to 20 characters........");
    fs.ftruncate(fd, 20, function(err) {
        if (err) {
            console.log(err);
        }
        fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
            if (err) {
                console.log(err);
            }
            if (bytes > 0) {
                console.log(buf.toString());
            }
            fs.close(fd, function(err) {
                if (err) {
                    console.log(err);
                }
                console.log("File closed successfully.");
            });
        });
    });
});