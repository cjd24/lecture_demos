'use strict';
//`d3` has already been "imported"

var svg = d3.select('svg').append('g')
        .attr('transform', 'translate(50,50)'); //reference to the HTML element

var dataTable = [
    {id:1, name:'A', sleep:4},
    {id:2, name:'B', sleep:0},
    {id:3, name:'C', sleep:12},
    {id:4, name:'D', sleep:9},
 ]

// var dataTable= [
//     {bin:'0-2hrs', count: 3},
//     {bin:'2-4hrs', count: 6}
// ]

// function calcWidth(datum){
//     return datum.sleep*25;
// }

var calcWidth = d3.scaleLinear()
                    .domain([0, 12])
                    .range([480,10])

var colorScale = d3.scaleLinear()
                    .domain([0, 2, 12])
                    .range(["red", "yellow", "green"])

//axis builder function
var xAxisFunc = d3.axisLeft(calcWidth)
                .ticks(10, '.0f')

var axisGroup = d3.select('svg').append('g') //to position the axis
        .attr('transform', 'translate(50,50)')
xAxisFunc(axisGroup)

function update(){
    //recalculate my scales

    //var data = d3.json('https://someapi');
    var starting = svg.selectAll('rect')
                    .data(dataTable, function(d){return d.id})
    
    var entering = starting.enter().append('rect')
                            .style('opacity', 0)

    var present = starting.merge(entering)

    present
        .attr('x', 0)
        .attr('height', 40)
        .attr('fill', function(d){ return colorScale(d.sleep)})
        .attr('y', function(d,i){ return d.id*50 - 50; })
        .transition().duration(3000)
            .attr('width', function(d){return calcWidth(d.sleep); })
            .style('opacity', 1)

    starting.exit()
            .transition().duration(3000)
                .attr('height', 0)
            .remove()
}

update(dataTable);

d3.select('#buttonA').on('click', update)

d3.select('#buttonB').on('click', function(){
    //change the global data table to make it small
    dataTable = [
        {id:2, name:'B', sleep:3},
        {id:3, name:'C', sleep:6},
        {id:5, name:'F', sleep:4}
    ]
});


// var rectList = svg.selectAll('rect');

// var dataJoin = rectList.data(dataTable, function(d) { return d.name })

// dataJoin.attr('width', function(d, i){ return d.sleep*50; })
//         .attr('y', function(d,i){ return d.id*50 - 50; })

// dataJoin.enter()
//         .append('rect')
//             .attr('width', function(d, i){return d.sleep*50; })
//             .attr('y', function(d,i){ return d.id*50 - 50; })
//             .attr('x', 0)
//             .attr('height', 40)
//             .attr('fill', 'blue')

// dataJoin.exit().remove();
