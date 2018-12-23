const errors = require('../errors');
const format = require('string-format');

const DEFAULT_TIME_DELIMTER = ':';
const MINUTES_PER_HOUR = 60;
const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_HOUR = SECONDS_PER_MINUTE * MINUTES_PER_HOUR;

/**
 * 
 * @param {*} timeString -- a time string of format HH:MM:SS.ms, eg `1:32:33.123`
 */
function convertTimeToSeconds(timeString) {
    let timeParts = timeString.split(DEFAULT_TIME_DELIMTER); // eg, ['1', '32', '33.123']
    if (timeParts.length != 3) throw new Error(format(errors, timeString));

    timeParts = timeParts.map(tp => Number(tp)); // [1, 32, 33.123]

    let timeInSeconds = timeParts[0] * SECONDS_PER_HOUR; // 1
    timeInSeconds += timeParts[1] * SECONDS_PER_MINUTE; // 32
    timeInSeconds += timeParts[2]; // 33.123

    return timeInSeconds;

}

module.exports = convertTimeToSeconds;