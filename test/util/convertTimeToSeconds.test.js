const assert = require('assert');
const convertTimeToSeconds = require('../../src/util/convertTimeToSeconds');

// The columns `FooDuration` and `BarDuration` are in HH:MM:SS.MS
//   format (where MS is milliseconds); please convert them to a floating
//   point seconds format.

describe('convertTimeToSeconds()', () => {
    it('throws on input that does not match HH:MM:SS[.MS] format', () => {
        assert.throws(() => { convertTimeToSeconds('1pm') });
        assert.throws(() => { convertTimeToSeconds('1:00') });
    })

    it('converts a time in HH:MM:SS.MS format to seconds', () => {
        assert.equal(convertTimeToSeconds('1:00:00.0'), 3600);
        assert.equal(convertTimeToSeconds('1:00:01.0'), 3601);
        assert.equal(convertTimeToSeconds('1:01:01.0'), 3661);
        assert.equal(convertTimeToSeconds('1:01:01.1'), 3661.1);
    });
});