const csvtojson = require('csvtojson');
const formatLine = require('./util/formatLine');
const log = require('./util/log');

/**
 * Asynchronously converts a given CSV-like string
 * @param {*} csvFileContents the CSV file contents as a string
 * @param {*} afterProcessingCb an optional callback to run after processing has finished
 */
function convertCsvFile(csvFileContents, afterProcessingCb) {
    csvtojson()
    .fromString(csvFileContents)
    .then(jsonArray => {
            let output = [];
            jsonArray.forEach(jsonBlob => {
                try {
                    output.push(formatLine(jsonBlob));
                } catch (err) {
                    log.error(err.message);
                }
            });
            output.forEach(line => log.info(line));
            if (afterProcessingCb) afterProcessingCb();
        });
}

module.exports = convertCsvFile;