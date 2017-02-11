const crypto = require('crypto');
const logger = require('./logger');

const encrypt = (message, secret) => {
    const cipher = crypto.createCipher('aes192', secret || '');

    let hash = cipher.update(message, 'utf8', 'hex');
    hash += cipher.final('hex');
    return hash;
};

const decrypt = (hash, secret) => {
    const decipher = crypto.createDecipher('aes192', secret || '');

    let decrypted = '';
    decipher.on('readable', () => {
        const data = decipher.read();
        if (data) {
            decrypted += data.toString('utf8');
        }
    });

    const promise = new Promise((resolve, reject) => {
        decipher.on('end', () => {
            resolve(decrypted);
        });
        decipher.on('error', (err) => {
            logger.log('error', err);

            reject('ERROR: aes192 decrypt failed.');
        });
    });

    decipher.write(hash, 'hex');
    decipher.end();
    return promise;
};

module.exports.encrypt = encrypt;
module.exports.decrypt = decrypt;
