let errors = require('../errors');

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