/*
  USAGE:
    encrypt
      node index.js "foo bar" --encrypt --salt "bar"
    decrypt
      node index.js a94237ddb77cfe1faface0fe1b9773f3 --decrypt --salt "bar"
*/

const chalk = require('chalk');
const dashdash = require('dashdash');
const msg = process.argv[2];

const output = require('./outputter');
const aes192 = require('./aes192');

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

if (msg === undefined){
  console.log(chalk.red('ERROR: Please give the msg.'));
  process.exit(1);

}

const opts = getCommandlineOptions();
outputHashes(msg, opts);
