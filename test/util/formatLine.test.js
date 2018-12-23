const assert = require('assert');
const formatLine = require('../../src/util/formatLine');

describe('formatLine()', () => {
    it('throws on bad input', () => {
        assert.throws(() => { formatLine(1) });
    });

    it('formats a line per spec', () => {
        let input = {
            Timestamp: '4/1/11 11:00:00 AM',
            Address: 'somewhere',
            ZIP: '94121',
            FullName: 'name',
            FooDuration: '1:23:32.123',
            BarDuration: '1:32:33.123',
            TotalDuration: 'zzsasdfa',
            Notes: 'words'
        }

        let expectedOutput = '2011-04-01T14:00:00.000-04:00,"somewhere",94121,NAME,5012.123,5553.123,10565.246,words';

        assert.deepEqual(formatLine(input), expectedOutput);
    });
});