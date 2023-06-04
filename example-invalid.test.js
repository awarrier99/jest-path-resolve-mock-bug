const path = require('path');
const { testFunc } = require('./example');

describe('example', () => {
    describe('testFunc', () => {
        const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
        jest.spyOn(path, 'resolve').mockReturnValue('test');
    
        it('should call path.resolve', () => {
            testFunc();
            expect(consoleLogSpy).toBeCalledWith('test');
        });
    
        it('should call path.resolve', () => {
            testFunc();
            expect(consoleLogSpy).toBeCalledWith('test');
        });
    });
})