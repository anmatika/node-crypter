const chalk = require('chalk');
const aes192 = require('aes192-node');

function outputDecryptedAes192(text, salt) {
  return aes192.decrypt(text, salt)
        .then(d => console.log(chalk.gray('Aes192: ') + chalk.green(d)))
        .catch(e => console.log(chalk.red(e)));
}

function outputEncryptedAes192(text, salt) {
  const hash = aes192.encrypt(text, salt);
  console.log(chalk.gray(`text ${text} encrypted with salt: ${salt} Aes192 as: \n`) + chalk.green(hash));
}

module.exports.outputDecryptedAes192 = outputDecryptedAes192;
module.exports.outputEncryptedAes192 = outputEncryptedAes192;
