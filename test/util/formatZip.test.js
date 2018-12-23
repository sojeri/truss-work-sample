const assert = require('assert');
const formatZip = require('../../src/util/formatZip');

describe('formatZip()', () => {
    it('throws on non string input', () => {
        assert.throws(() => { formatZip(1) });
        assert.throws(() => { formatZip(null) });
        assert.throws(() => { formatZip(['c', 'h', 'a', 'r', 's', '😀']) });
    });

    it('does not run any additional validation on zip', () => {
        assert.doesNotThrow(() => { formatZip('not a valid zip code') });
        assert.doesNotThrow(() => { formatZip('23894u234-2359273492384234') });
    });

    it('returns a 5-digit or greater zip unchanged', () => {
        assert.equal(formatZip('98004'), '98004');
        assert.equal(formatZip('98004-4274'), '98004-4274');
    });

    it('pads a zip under 5 digits with 0s', () => {
        assert.equal(formatZip(''), '00000');
        assert.equal(formatZip('1'), '00001');
        assert.equal(formatZip('4444'), '04444');
    });
});