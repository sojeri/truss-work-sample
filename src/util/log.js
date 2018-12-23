/**
 * Why is this a thing? For stubbing in unit tests. Stubbing console.log directly can prevent
 * important unit test output from displaying on test failure, so all logging will be done through
 * this easily stubbed module.
 */
module.exports = {
    info: function() {
        console.log.apply(console, arguments);
    },

    error: function() {
        console.error.apply(console, arguments);
    },
};