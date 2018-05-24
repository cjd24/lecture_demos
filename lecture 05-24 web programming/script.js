'use strict';
//`d3` has already been "imported"

function sayHello() {
    console.log("hello!");
}

var paragraph = d3.select('p');
paragraph.html("New content!");

var button1 = d3.select('#buttonOne');

button1.on('click', async function() {
    console.log("You clicked me!")
    sayHello();
    if(paragraph.html() === "New content!"){
        console.log("something has changed");
    }

    var data = await d3.json("https://api.github.com/emojis");
    console.log(data);

});



// async function downloadData() {
//     console.log("before")

//     var data = await d3.json("https://api.github.com/emojis");
//     console.log(data);

//     console.log("after");
//     return data;
// }

// var result = downloadData();
// console.log('result', result);














