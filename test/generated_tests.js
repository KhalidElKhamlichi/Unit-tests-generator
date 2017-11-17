var ann_fns = require("annotated_functions");
var assert = require("chai").assert;

describe("Generated tests", function(){

    describe("Generated tests for testfunction1", function(){
        it("with correct parameters", function(){
            assert.typeOf(ann_fns.testfunction1(1,1), "String");
        });
        it("with missing parameters", function(){
            assert.typeOf(ann_fns.testfunction1(1), "String");
        });
        it("with fake parameters", function(){
            assert.typeOf(ann_fns.testfunction1("test",1), "String");
            assert.typeOf(ann_fns.testfunction1(1,"test"), "String");
            assert.typeOf(ann_fns.testfunction1("test",{}), "String");
            assert.typeOf(ann_fns.testfunction1({},"test"), "String");
            assert.typeOf(ann_fns.testfunction1(1,{}), "String");
            assert.typeOf(ann_fns.testfunction1({},1), "String");
            assert.typeOf(ann_fns.testfunction1("test",true), "String");
            assert.typeOf(ann_fns.testfunction1(true,"test"), "String");
            assert.typeOf(ann_fns.testfunction1(1,true), "String");
            assert.typeOf(ann_fns.testfunction1(true,1), "String");
            assert.typeOf(ann_fns.testfunction1({},true), "String");
            assert.typeOf(ann_fns.testfunction1(true,{}), "String");
            assert.typeOf(ann_fns.testfunction1("test",[]), "String");
            assert.typeOf(ann_fns.testfunction1([],"test"), "String");
            assert.typeOf(ann_fns.testfunction1(1,[]), "String");
            assert.typeOf(ann_fns.testfunction1([],1), "String");
            assert.typeOf(ann_fns.testfunction1({},[]), "String");
            assert.typeOf(ann_fns.testfunction1([],{}), "String");
            assert.typeOf(ann_fns.testfunction1(true,[]), "String");
            assert.typeOf(ann_fns.testfunction1([],true), "String");
        });

    });
    describe("Generated tests for testfunction2", function(){
        it("with correct parameters", function(){
            assert.typeOf(ann_fns.testfunction2("test",1), "Object");
        });
        it("with missing parameters", function(){
            assert.typeOf(ann_fns.testfunction2("test"), "Object");
        });
        it("with fake parameters", function(){
            assert.typeOf(ann_fns.testfunction2(1,"test"), "Object");
            assert.typeOf(ann_fns.testfunction2("test",{}), "Object");
            assert.typeOf(ann_fns.testfunction2({},"test"), "Object");
            assert.typeOf(ann_fns.testfunction2(1,{}), "Object");
            assert.typeOf(ann_fns.testfunction2({},1), "Object");
            assert.typeOf(ann_fns.testfunction2("test",true), "Object");
            assert.typeOf(ann_fns.testfunction2(true,"test"), "Object");
            assert.typeOf(ann_fns.testfunction2(1,true), "Object");
            assert.typeOf(ann_fns.testfunction2(true,1), "Object");
            assert.typeOf(ann_fns.testfunction2({},true), "Object");
            assert.typeOf(ann_fns.testfunction2(true,{}), "Object");
            assert.typeOf(ann_fns.testfunction2("test",[]), "Object");
            assert.typeOf(ann_fns.testfunction2([],"test"), "Object");
            assert.typeOf(ann_fns.testfunction2(1,[]), "Object");
            assert.typeOf(ann_fns.testfunction2([],1), "Object");
            assert.typeOf(ann_fns.testfunction2({},[]), "Object");
            assert.typeOf(ann_fns.testfunction2([],{}), "Object");
            assert.typeOf(ann_fns.testfunction2(true,[]), "Object");
            assert.typeOf(ann_fns.testfunction2([],true), "Object");
        });

    });
});