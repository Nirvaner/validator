var Validator = require('./validator');
var userDef = require('./userDef');

var userModel = new Validator(userDef);
console.log(userModel.userName);
console.log(userModel.isValid);