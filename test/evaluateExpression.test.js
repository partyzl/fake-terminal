const evaluateExpression = require('../evaluateExpression');
const errors = require('../errors');

describe('evaluateExpression', () => {

    test('unrecognized flag throws invalidFlagError', () => {
        try {
            evaluateExpression('ls -@');
        } catch (err) {
            expect(err).toEqual(errors.invalidFlagError);
        }
        
    }),

    test('unimplemented flag throws disabledFlagError', () => {
        try {
            evaluateExpression('ls -A');
        } catch (err) {
            expect(err).toEqual(errors.disabledFlagError);
        }

    }),

    test('multiple paths throws multiplePathError', () => {
        try {
            evaluateExpression('ls . .');
        } catch (err) {
            expect(err).toEqual(errors.multiplePathError);
        }
    }),

    test('unrecognized path throws invalidPathError', () => {
        try {
            evaluateExpression('ls .');
        } catch (err) {
            expect(err).toEqual(errors.invalidPathError);
        }
    })

})