const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const { firstNLines } = require("./helper.js");
var fs = require("fs");

var argv = require("yargs/yargs")(process.argv.slice(2)).argv;

let res = "";
if (argv._.length > 0) {
  firstNLines(argv._[0], argv.n);
  // console.log(res);
}
