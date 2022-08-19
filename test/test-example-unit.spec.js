const {expect} = require("chai");
const {exampleFunction} = require("../src/functions");
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
    })
    describe("subtract function spec", () => {

    })
    describe(" divide function spec", () => {

    })
    describe("multiply function spec", () => {

    })
})