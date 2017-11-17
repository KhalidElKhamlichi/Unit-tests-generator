# Unit-tests-generator

Generates unit tests for a given javascript file.

parser.js: generates a configuration file 'conf.yml' containing info about the annotated functions.
           The first argument is the keyword used for annotations, the second one is the annotated functions javascript file's path.
           
generate_tests.js: generates the unit tests using Mocha and Chai.
                   the first argument is the annotated functions javascript file's name (the file must also be in node_modules),
                   the second argument is the configuration file's path ('conf.yml'),
                   the output file's path.
