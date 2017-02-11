const crypto = require('crypto');
const q = require('q');

const encrypt = (message, secret) => {
    const cipher = crypto.createCipher('aes192', secret || '');

    let hash = cipher.update(message, 'utf8', 'hex');
    hash += cipher.final('hex');
    return hash;
};

const decrypt = (hash, secret) => {
    const deferred = q.defer();
    const decipher = crypto.createDecipher('aes192', secret || '');

    let decrypted = '';
    decipher.on('readable', () => {
        const data = decipher.read();
        if (data) {
            decrypted += data.toString('utf8');
        }
    });
    decipher.on('end', () => {
        deferred.resolve(decrypted);
    });
    decipher.on('error', (err) => {
        deferred.reject('ERROR: aes192 decrypt failed.');
    });

    decipher.write(hash, 'hex');
    decipher.end();
    return deferred.promise;
};

module.exports.encrypt = encrypt;
module.exports.decrypt = decrypt;
