const chai = require('chai');
const sinon = require('sinon');
const assert = chai.assert;
const outputter = require('../outputter');

const consoleSpy = sinon.spy(console, 'log');

describe('outputEncryptedAes192', ()=> {
    it('console log is called', ()=> {
        outputter.outputEncryptedAes192('foo', 'bar');
        assert.isTrue(consoleSpy.called);
    });
});

describe('outputDecryptedAes192', ()=> {
    it('console log is called', ()=> {
        return outputter.outputDecryptedAes192('bb8caf00e575c5e4a70345a3507e8565', 'salt').then((e)=> {
            assert.isTrue(consoleSpy.called);
        });
    });
});
