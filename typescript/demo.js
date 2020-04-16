"use strict";
var exports={};
exports.__esModule = true;
var person = /** @class */ (function () {
    function person(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        console.log("addition of three number is = " + (a + b + c));
    }
    person.prototype.display = function (a, b, c) {
        console.log("hello world");
        return (a + b + c);
    };
    return person;
}());
exports.person = person;
var obj = new person(1, 2, 3);
var c = obj.display(1, 2, 3);
console.log("addition of three number is =" + c);
