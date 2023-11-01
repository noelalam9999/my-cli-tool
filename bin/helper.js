var fs = require("fs");

function firstNLines(file, numberOfLines) {
  fs.readFile(file, "utf8", function (err, data) {
    console.log(file, numberOfLines);
    console.log(
      numberOfLines ? data.split("\n").slice(0, numberOfLines).join("\n") : data
    );
  });
  //   return numberOfLines;
}

module.exports = {
  firstNLines,
};
