const HST = require("../public/HST.js");

it("tests that Ontario tax is correct", ()=>{
    expect(HST.calculate("ON", 10)).toBe(1.3);
});

it("tests that Alberta Tax is correct", ()=>{
    expect(HST.calculate("AB", 10)).toBe(.5);
});

it("tests that the province \"asdf\" throws an exception", ()=>{
    try{
        HST.calculate("asdf", 10);
        fail();
    }
    catch(e){
        expect(e.toString()).toBe("invalid province");
    }
});

it("tests that the province of Manitoba's tax is correct", ()=>{
    expect(HST.calculate("MB", 10)).toBe(1.3);
})