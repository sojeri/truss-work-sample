let errors = {
    invalidZip: 'Invalid ZIP. Expected input should be a string variable.',
    invalidTimeFormat: 'Invalid time format. Expected input should be in HH:MM:SS[.MS] format. Received: {}',
    noInputPipedIn: 'Error: no input piped in. Please pipe the input directly to csv-normalize. Eg, `cat <input file> | csv-normalize`',
};

module.exports = errors;