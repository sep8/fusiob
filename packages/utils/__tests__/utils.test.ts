import trimString from '../src'

describe('utils test', () => {
    it('should work well', () => {
        expect(trimString(' foo ')).toBe('foo')
    });
});
