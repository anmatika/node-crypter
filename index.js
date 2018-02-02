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

function getCommandlineOptions() {
  const options = [
    { name: 'encrypt', type: 'bool' },
    { name: 'e', type: 'bool' },
    { name: 'decrypt', type: 'bool' },
    { name: 'd', type: 'bool' },
    { name: 'salt', type: 'string' },
    { name: 's', type: 'string' },
    { name: 'help', type: 'bool' },
    { name: 'h', type: 'bool' },
  ];
  const opts = dashdash.parse({ options });
  return opts;
}

function outputHashes(text, opts) {
  if (opts.help || opts.h) {
    console.log(
      'USAGE:\n\n Encrypt:\n crypter <msg> -e -s <secret>\n\n Decrypt:\n crypter <hash> -d -s <secret>'
    );
    return;
  }

  if (opts.decrypt || opts.d) {
    output.outputDecryptedAes192(text, opts.salt || opts.s);
    return;
  }

  output.outputEncryptedAes192(text, opts.salt || opts.s);
  return;
}

if (msg === undefined) {
  console.log(chalk.red('ERROR: Please give the msg.'));
  process.exit(1);
}

const opts = getCommandlineOptions();
outputHashes(msg, opts);
