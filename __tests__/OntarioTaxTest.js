const HST = require("../public/HST.js");
const {OntarioTax,FederalTax} = require("../public/Tax")

it("tests that Ontario tax lessthan $40922 correct", ()=>{
    expect(OntarioTax.calculate(30000)).toBe(1515);
});

it("tests that Ontario tax lessthan $81847 and greater than $40922 correct", ()=>{
    expect(OntarioTax.calculate(60000)).toBe(3812.64);
});

it("tests that Ontario tax lessthan $150000 and greater than $81847 correct", ()=>{
    expect(OntarioTax.calculate(90000)).toBe(6557.64);
});

it("tests that Ontario tax lessthan $220000 and greater than $150000 correct", ()=>{
    expect(OntarioTax.calculate(170000)).toBe(13877.64);
});

it("tests that Ontario tax greater than $220000 correct", ()=>{
    expect(OntarioTax.calculate(230000)).toBe(19367.64);
});

