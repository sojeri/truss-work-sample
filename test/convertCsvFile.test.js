const assert = require('assert');
const sinon = require('sinon');
const convertCsvFile = require('../src/convertCsvFile');
const log = require('../src/util/log');

describe('convertCsvFile()', () => {
    let headers = 'Timestamp,Address,ZIP,FullName,FooDuration,BarDuration,TotalDuration,Notes';
    let goodLine = '12/31/16 11:59:59 PM,"a place",1,name,1:23:32.1,1:32:33.1,words,more words';
    let badLine = 'invalid line';

    it('logs converted data', (done) => {
        // arrange
        let infoCalls = 0;
        let errorCalls = 0;
        sinon.stub(log, 'info').callsFake(() => infoCalls++);
        sinon.stub(log, 'error').callsFake(() => errorCalls++);

        function assertThenCleanupCallback() {
            // assert
            assert.equal(infoCalls, 2);
            assert.equal(errorCalls, 0);

            // cleanup
            log.info.restore();
            log.error.restore();
            done();
        }

        // act
        let twoLineInput = `${headers}\n${goodLine}\n${goodLine}`;
        convertCsvFile(twoLineInput, assertThenCleanupCallback);
    });

    it('continues processing after hitting a bad line', (done) => {

        // arrange
        let infoCalls = 0;
        let errorCalls = 0;
        sinon.stub(log, 'info').callsFake(() => infoCalls++);
        sinon.stub(log, 'error').callsFake(() => errorCalls++);

        function assertThenCleanupCallback() {
            // assert
            assert.equal(infoCalls, 2);
            assert.equal(errorCalls, 1);

            // cleanup
            log.info.restore();
            log.error.restore();
            done();
        }

        // act
        let badLineInput = `${headers}\n${goodLine}\n${badLine}\n${goodLine}`;
        convertCsvFile(badLineInput, assertThenCleanupCallback);
    });
});