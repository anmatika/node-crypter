const chalk = require('chalk');
const dashdash = require('dashdash');
const msg = process.argv[2];

const output = require('./outputter');
const aes192 = require('./aes192');

if (msg === undefined){
    console.log(chalk.red('ERROR: Please give the msg msg.'));
    process.exit(1);
}

run();

function run() {
    outputHashes(msg);
}

function outputHashes(msg){
    output.outputDecryptedAes192(msg,'salt');
}
