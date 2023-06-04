const path = require('path');

describe('example', () => {
    it('should call path.resolve', () => {
        const resolveSpy = jest.spyOn(path, 'resolve').mockImplementationOnce(() => ''); // works fine by itself
        require('./example');
        expect(resolveSpy).toBeCalledWith(expect.any(String), expect.stringMatching('example'));
    })

    it('should call path.resolve', () => {
        const resolveSpy = jest.spyOn(path, 'resolve').mockImplementation(() => ''); // seems to cause error for entire test suite
        jest.resetModules();
        require('./example');
        expect(resolveSpy).toBeCalledWith(expect.any(String), expect.stringMatching('example'));
    })
})