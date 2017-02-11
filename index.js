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
    const opts = getCommandlineOptions();
    outputHashes(msg, opts);
}

function getCommandlineOptions() {
    const options = [
        { name: 'encrypt', type: 'bool' },
        { name: 'decrypt', type: 'bool' },
        { name: 'salt', type: 'string' }
    ];
    const opts = dashdash.parse({options: options});
    return opts;
}
function outputHashes(text, opts){
    debugger;
    if (opts.decrypt){
        output.outputDecryptedAes192(text, opts.salt);
        return;
    }

    output.outputEncryptedAes192(text, opts.salt);
    return;
}
