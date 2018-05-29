'use strict';
//`d3` has already been "imported"

var svg = d3.select('svg'); //reference to the HTML element

var dataTable = [
    {id:1, name:'A', sleep:8},
    {id:2, name:'B', sleep:3},
    {id:3, name:'C', sleep:6},
    {id:4, name:'D', sleep:10},
 ]

var rectList = d3.select('svg').selectAll('rect');

var dataJoin = rectList.data(dataTable, function(d) { return d.name })

dataJoin.attr('width', function(d, i){ return d.sleep*50; })
        .attr('y', function(d,i){ return d.id*50 - 50; })

dataJoin.enter()
        .append('rect')
            .attr('width', function(d, i){return d.sleep*50; })
            .attr('y', function(d,i){ return d.id*50 - 50; })
            .attr('x', 0)
            .attr('height', 40)
            .attr('fill', 'blue')

dataJoin.exit().remove();
