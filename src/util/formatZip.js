let errors = require('../errors');

/**
 * Returns a formatted ZIP (adds leading zeros where necessary)
 * @param {*} zipString the ZIP to format
 */
function formatZip(zipString) {
    if (typeof zipString === 'string' || zipString instanceof String) {
        while (zipString.length < 5) {
            zipString = '0' + zipString;
        }

        return zipString;
    }

    throw new Error(errors.invalidZip);
}

module.exports = formatZip;