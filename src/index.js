#!/usr/bin/env node
const normalizeCsvFile = require('./normalizeCsvFile');
const log = require('./util/log');
const errors = require('./errors');

const TIMEOUT_MS = 200;

function handleTimeout() {
    process.stdin.end();
    log.error(errors.noInputPipedIn);
    process.exit(1);
}

let timeout = setTimeout(handleTimeout, TIMEOUT_MS);

let stdIn = process.stdin;

stdIn.on('data', (data) => {
    if (timeout) clearTimeout(timeout);
    normalizeCsvFile(data.toString());
});

stdIn.on('error', (err) => {
    log.error(err.message);
    process.exit(1);
});

stdIn.on('end', () => {
    if (timeout) clearTimeout(timeout);
});

