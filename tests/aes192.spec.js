const chai = require('chai');
const assert = chai.assert;
const target = require('../aes192');

describe('encrypt', ()=> {
    it('should get correct hash', ()=> {
        const hash = target.encrypt('foobarbaz', 'salt');
        assert.equal(hash, 'bb8caf00e575c5e4a70345a3507e8565');
    });
    it('should fail with wrong salt', ()=> {
        const hash = target.encrypt('foobarbaz', 'solt');
        assert.notEqual(hash, 'bb8caf00e575c5e4a70345a3507e8565');
    });
});

describe('decrypt', ()=> {
    it('should get correct message', ()=> {
        return target.decrypt('bb8caf00e575c5e4a70345a3507e8565', 'salt')
            .then(r => {
                assert.equal('foobarbaz',r);
            });
    });
    it('should fail with wrong salt', ()=> {
        return target.decrypt('bb8caf00e575c5e4a70345a3507e8565', 'solt')
            .catch(r => {
                assert.equal('ERROR: aes192 decrypt failed.',r);
            });
    });
});
