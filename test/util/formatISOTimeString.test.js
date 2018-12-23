const assert = require('assert');
const formatISOTimeString = require('../../src/util/formatISOTimeString');

describe('formatISOTimeString()', () => {
    it('throws on invalid input', () => {
        assert.throws(() => { formatISOTimeString('1pm') });
        assert.throws(() => { formatISOTimeString('14/2/04 8:44:11 AM') });
    });

    it('converts to the correct format', () => {
        let expected = '2004-10-02T11:44:11.000-04:00';
        assert.equal(expected, formatISOTimeString('10/2/04 8:44:11 AM'));
    });

    it('handles daylight and standard time appropriately', () => {
        let standardOffset = '-05:00';
        let convertedStandardTime = formatISOTimeString('3/2/04 8:44:11 AM');
        let daylightOffset = '-04:00';
        let convertedDaylightTime = formatISOTimeString('10/2/04 8:44:11 AM');
        assert.equal(convertedStandardTime.includes(standardOffset), true);
        assert.equal(convertedStandardTime.includes(daylightOffset), false);
        assert.equal(convertedDaylightTime.includes(standardOffset), false);
        assert.equal(convertedDaylightTime.includes(daylightOffset), true);
    });
});