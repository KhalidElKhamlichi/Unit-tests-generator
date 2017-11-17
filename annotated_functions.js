/*
@test_gen(return = String
param1 = Number
param2 = Number)
*/
exports.testfunction1 = function(n, s){
    return s + n;
}

/*
@test_gen(return = Object
param1 = String
param2 = Number
)
*/
exports.testfunction2 = function(n1, n2){
    var s = n1 - n2;
    return s;
}