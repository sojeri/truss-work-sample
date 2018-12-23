const formatISOTimeString = require('./formatISOTimeString');
const formatZip = require('./formatZip');
const convertNameToUppercase = require('./convertNameToUppercase');
const convertTimeToSeconds = require('./convertTimeToSeconds');

/**
 * Converts a single line from the csv file per spec.
 * @param {*} line - a single line from the csv file in json blob format
 * @returns the updated line in CSV format
 */
function formatLine(line) {
    let time = formatISOTimeString(line.Timestamp);
    let zip = formatZip(line.ZIP);
    let name = convertNameToUppercase(line.FullName);
    let foo = convertTimeToSeconds(line.FooDuration);
    let bar = convertTimeToSeconds(line.BarDuration);
    let duration = foo + bar;
    
    return `${time},"${line.Address}",${zip},${name},${foo},${bar},${duration},${line.Notes}`;
}

module.exports = formatLine;