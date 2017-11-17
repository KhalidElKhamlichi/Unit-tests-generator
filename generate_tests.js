var yaml = require("js-yaml");
var fs = require("fs");
var Combinatorics = require("js-combinatorics");

var ann_fns =  process.argv[2]; // file contains functions to test

var config_file = process.argv[3]; // .yml file contains info about functions
var output_file = process.argv[4]; // file that will contain generated tests

//class to hold info about a function
class fn {
    constructor(name)
    {
        this.name = name;
        this.returnType = "undefined";
        this.params = [];
    }
    
}

var mapping = {
        "String": "\"test\"",
        "Number": 1,
        "Object": "{}",
        "Boolean": true,
        "Array": "[]", 
};

try {
    const config = yaml.safeLoad(fs.readFileSync(config_file, 'utf8'));
    fs.writeFileSync(output_file, "var ann_fns = require(\""+ann_fns+"\");\n"+
                                        "var assert = require(\"chai\").assert;\n"+
                                        "\ndescribe(\"Generated tests\", function(){\n");

    for (var function_name in config) {
        // get function and store it in an object
        if (config.hasOwnProperty(function_name)) {
            var funct = new fn(function_name);
            for (var property in config[function_name]) {
                if (config[function_name].hasOwnProperty(property)) {
                    if(property.includes("return"))
                    {
                        funct.returnType = config[function_name][property];
                    }
                    else{
                        if(property.includes("param"))
                            funct.params.push(config[function_name][property]);
                    }
                    
                }
            }
        }

        //convert params of the function to value (String -> "test")
        var args = convertToValues(funct.params);
        
        //generate tests with correct parameters
        fs.appendFileSync(output_file,"\n    describe(\"Generated tests for "+funct.name+"\", function(){\n"+
        "        it(\"with correct parameters\", function(){\n");
        fs.appendFileSync(output_file, 
        "            assert.typeOf(ann_fns."+funct.name+"("+args+"), \""+funct.returnType+"\");\n        });\n");

        //generate tests with missing parameters
        fs.appendFileSync(output_file, "        it(\"with missing parameters\", function(){\n");
        
        var miss_args = [];
        args.forEach(function(arg){
            miss_args.push(arg);
            //avoid test with correct args
            if(miss_args.length != args.length)
                fs.appendFileSync(output_file, "            assert.typeOf(ann_fns."+funct.name+"("+miss_args+"), \""+funct.returnType+"\");\n");
        });

        //close tests with wrong parameters
        fs.appendFileSync(output_file, "        });\n");

        //generate tests with fake parameters
        fs.appendFileSync(output_file, "        it(\"with fake parameters\", function(){\n");
        var fake_args = [];
        var vals = Object.keys(mapping).map(function(key) {
            return mapping[key];
        });
        cmb = Combinatorics.combination(vals, args.length);
        while(a = cmb.next())
        {
            fake_args = Combinatorics.permutation(a).toArray();
            fake_args.forEach(function(arg){
                if(!(arg.length==args.length && arg.every((v,i)=> v === args[i])))
                    fs.appendFileSync(output_file, "            assert.typeOf(ann_fns."+funct.name+"("+arg+"), \""+funct.returnType+"\");\n");
            })
        } 
        
        //close tests with fake parameters
        fs.appendFileSync(output_file, "        });\n");

        // close describe bloc
        fs.appendFileSync(output_file, "\n    });");
    }
    fs.appendFileSync(output_file, "\n});");
} catch (e) {   
    console.log(e);
}



function convertToValues(arr){
    var values = [];
    arr.forEach(function(param)
    {
        values.push(mapping[param]);
    });
    return values; 
}

function clone(a) {
	return a.slice(0);
};