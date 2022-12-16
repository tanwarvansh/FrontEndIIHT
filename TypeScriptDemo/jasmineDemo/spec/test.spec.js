const fun=require("../test");
const helloWorld=fun.helloWorld;
const findLength=fun.findLength;
const upperCase=fun.upperCase;

describe("return hello world",()=>{
    it("should return hello world",()=>{
        expect(helloWorld()).toEqual("hello world");

    });
    it("should return length",()=>{
        expect(findLength("abcd")).toEqual(4);
    });

    it("should return upperCase",()=>{
        expect(upperCase("abc")).toEqual("ABC");
    });
    

});
