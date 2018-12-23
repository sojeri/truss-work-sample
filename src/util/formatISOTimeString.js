const { DateTime } = require('luxon');

const STANDARD_FORMAT = 'M/d/yy h:mm:ss a';
const INPUT_TIMEZONE = { zone: 'America/Los_Angeles' };
const OUTPUT_TIMEZONE =  'America/New_York';

/**
 * Returns an America/New_York ISO-formatted time string based on a given America/Los_Angeles input string
 * @param {*} pacificTimeString - the time string to convert, eg '10/2/04 8:44:11 AM'
 */
function formatISOTimeString(pacificTimeString) {
    let dateTime = DateTime.fromFormat(
        pacificTimeString,
        STANDARD_FORMAT,
        INPUT_TIMEZONE);
        
    if (dateTime.invalid) throw new Error(dateTime.invalid.reason);
    
    return dateTime.setZone(OUTPUT_TIMEZONE).toISO();
}

module.exports = formatISOTimeString;