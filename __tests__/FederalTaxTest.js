const HST = require("../public/HST.js");
const {OntarioTax,FederalTax} = require("../public/Tax")

it("tests that Federal tax lessthan $45282 correct", ()=>{
    expect(FederalTax.calculate(30000)).toBe(4500);
});

it("tests that Federal tax lessthan $90563 and greater than $45282 correct", ()=>{
    expect(FederalTax.calculate(60000)).toBe(9809.19);
});

it("tests that Federal tax lessthan $140388 and greater than $90563 correct", ()=>{
    expect(FederalTax.calculate(100000)).toBe(18009.19);
});

it("tests that Federal tax lessthan $200000 and greater than $140388 correct", ()=>{
    expect(FederalTax.calculate(170000)).toBe(32359.19);
});

it("tests that Federal tax greater than $200000 correct", ()=>{
    expect(FederalTax.calculate(230000)).toBe(44659.19);
});

