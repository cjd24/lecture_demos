'use strict';

//script goes here!

console.log("Hello World!!!!!!");

var message = "information";

var cool = message.indexOf("cool");
console.log(cool >= 0)

console.log(message.indexOf("info") > 0)

var array = ['a','b','c'];
var printItem = function(item) {
   console.log(item);
}

array.forEach(function(item) {
    console.log(item);
    item.forEach(function(innerItem) {
        console.log(innerItem);
    });
});

for(item of array){

}