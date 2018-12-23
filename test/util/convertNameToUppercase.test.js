const assert = require('assert');
const convertNameToUppercase = require('../../src/util/convertNameToUppercase');

describe('convertNameToUppercase() -- which is only a separate function to document these failings', () => {
    it('does not modify characters that should not be capitalized', () => {
        assert.equal(convertNameToUppercase('愛子'), '愛子');
        assert.equal(convertNameToUppercase('¯\\_(ツ)_/¯'), '¯\\_(ツ)_/¯');
        assert.equal(convertNameToUppercase('은지'), '은지');
        assert.equal(convertNameToUppercase('عبّاس'), 'عبّاس');
    });

    it('correctly capitalizes some non-English characters', () => {
        assert.equal(convertNameToUppercase('Ayçın'), 'AYÇIN');
        assert.equal(convertNameToUppercase('Jürgen'), 'JÜRGEN');
        assert.equal(convertNameToUppercase('Андрей'), 'АНДРЕЙ');
    });

    it('fails to correctly capitalize some characters due to a lack of locale information -- no way to infer from data', () => {
        assert.equal(convertNameToUppercase('Aziz'), 'AZİZ');
    });
});