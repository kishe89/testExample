const {expect} = require("chai");
const {exampleFunction, sum} = require("../src/functions");
describe("테스트 작성 예", () => {
    before(() =>{})
    after(() =>{})
    describe("example function spec", () => {
        it('should return true',  () => {
            const result = exampleFunction();
            expect(result).to.be.equals(true);
        });
    })
    describe("sum function spec", () => {
        it('1+1 = 2', () => {
            const aParam = 1;
            const bParam = 1;
            const expectResult = 2;
            const result = sum(aParam, bParam);
            expect(result).to.be.equals(expectResult);
        })
    })
    describe("subtract function spec", () => {

    })
    describe(" divide function spec", () => {

    })
    describe("multiply function spec", () => {

    })
})