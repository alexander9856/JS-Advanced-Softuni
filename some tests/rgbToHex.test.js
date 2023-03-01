let { expect } = require('chai')
let rgbToHexColor = require('./rgbToHex')

describe('RGB Convertor', () => {
    describe('Happy path', () => {
        it('converts white', () => {
            expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
        })
        it('converts black', () => {
            expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
        })
        it('converts purple', () => {
            expect(rgbToHexColor(128, 0, 128)).to.equal('#800080');

        })
        it('converts yellow', () => {
            expect(rgbToHexColor(234, 221, 202)).to.equal('#EADDCA');
        })
    })
    describe('invalid params', () => {
        it('return undefined for missing params', () => {
            expect(rgbToHexColor(5)).to.equal(undefined);
        })
        it('return undefined for params out of range', () => {
            expect(rgbToHexColor(-1, -1, -1)).to.equal(undefined);
            expect(rgbToHexColor(-1, 0, 0)).to.equal(undefined);
            expect(rgbToHexColor(0, -1, 0)).to.equal(undefined);
            expect(rgbToHexColor(0, 0, -1)).to.equal(undefined);

            expect(rgbToHexColor(256, 256, 256)).to.equal(undefined);
            expect(rgbToHexColor(256, 0, 0)).to.equal(undefined);
            expect(rgbToHexColor(0, 256, 0)).to.equal(undefined);
            expect(rgbToHexColor(0, 0, 256)).to.equal(undefined);
        })
        it('returns undefined for one str', () => {
            expect(rgbToHexColor('str', 221, 202)).to.equal(undefined);
        })
    })
})