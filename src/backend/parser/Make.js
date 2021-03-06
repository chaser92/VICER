var JisonLex = require('jison-lex');
var Jison = require('jison');
var fs = require('fs');
var path = require('path');

var dest = path.join(path.resolve(process.argv[2]), "src/parser"); // first command-line argument

try { // create directory if it does not exist
    fs.mkdirSync(dest);
} catch(e) {
    if (e.code !== 'EEXIST' ) throw e;
}

var lexerFilename = path.join(dest, 'ansic.lex.js');
var parserFilename = path.join(dest, 'ansic.js');

var lexerGrammar = fs.readFileSync('src/backend/parser/assets/ansic.jisonlex', 'utf-8');
var lexerSource = JisonLex.generate(lexerGrammar);
fs.writeFileSync(lexerFilename, lexerSource);

var parserGrammar = fs.readFileSync('src/backend/parser/assets/ansic.jison', 'utf-8');
var parser = new Jison.Parser(parserGrammar);
parser.lexer = new JisonLex(lexerGrammar);
var parserSource = addRequireJsParts(parser.generate());

fs.writeFileSync(parserFilename, parserSource);

function addRequireJsParts(source) {
    source = source.replace("require('fs')", "dummy");
    source = source.replace("require('path')", "dummy");
    return "define(function(require, exports, module) {" + source + "});";
}
