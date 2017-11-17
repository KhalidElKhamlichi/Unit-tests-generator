var fs = require("fs");
var yaml = require("js-yaml");

exports.parseAnnotations = function(keyword, input, output)
{
    var content = fs.readFileSync(input, 'utf8');
    var objs = {};
    var lines = content.split("\n");
    for(var i=0; i<lines.length; i++)
    {
        if(lines[i].indexOf(keyword) != -1)
        {
            lines[i] = lines[i].substring(lines[i].indexOf(keyword)+keyword.length+1, lines[i].length); //remove keyword
            var obj = {};

            //while not at the end of annotation get properties 
            while(lines[i].indexOf(")") == -1)
            {
                var line = lines[i].split("=");
                line[0] = line[0].trim();
                line[1] = line[1].trim();
                
                obj[line[0]] = line[1];
                i++;
            }
            
            //if last line contains value not just ')'
            if((lines[i].trim()).length > 1)
            {
                var line = lines[i].split("=");
                line[0] = line[0].trim();
                line[1] = line[1].trim();
                line[1] = line[1].substring(0, line[1].length-1);
                
                obj[line[0]] = line[1];
            }

            //skip other annotations to reach function's name
            while(lines[i].indexOf("exports") == -1 && i<lines.length)
            {
                i++;
            }

            //get function's name
            if(lines[i].indexOf("exports") != -1)
            {
                var line = lines[i].split("=");
                line[0] = line[0].trim();
                var function_name = line[0].split(".")[1];
                objs[function_name] = obj;
            }
            else
            {
                console.log("no exported function");
            }
            
        }
    }
    fs.appendFileSync(output, yaml.dump(objs));
    //console.log(objs);
}

exports.parseAnnotations('@test_gen', 'annotated_functions.js', 'conf.yml');
