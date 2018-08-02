d3.json("/Melbourne_housing_avg_pricing.json").then(function(data) {
    console.log(data);
    console.log(d3.max(data, function(d) {return d.Avg_price}));
    
    var ydata = [],
        xdata = [];

    for (var i = 0; i < data.length; i++) {
        xdata.push(data[i].Suburb);
        ydata.push(+data[i].Avg_price);
    };
    
    console.log(xdata)
    console.log(ydata)
    
    var margin = {top: 0, right: 0, bottom: 20, left: 60},
        height = 300 - margin.top - margin.bottom,
        width = 300 - margin.left - margin.right;

    var yScale,
        xScale,
        yAxisValues,
        xAxisValues,
        yAxisTicks,
        xAxisTicks;

    yScale = d3.scaleLinear()
        .domain([0, d3.max(ydata)])
        .range([0, height]);

    yAxisValues = d3.scaleLinear()
        .domain([0, d3.max(ydata)])
        .range([height, 0]);

    yAxisTicks = d3.axisLeft(yAxisValues).ticks(5);

    xScale = d3.scaleBand()
        .domain(ydata)
        .range([0, width])
        .paddingInner(0.2);

    xAxisValues = d3.scaleBand()
        .domain(xdata)
        .range([0, width])
        .paddingInner(0.2);

    xAxisTicks = d3.axisBottom(xAxisValues);
    
    d3.select('.bar')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .style('background', '#C9D7D6')
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
        .selectAll('rect')
        .data(ydata)
        .enter()
            .append('rect')
            .style('fill', '#C61C6F')
            .attr('width', function(d) {return xScale.bandwidth()})
            .attr('height', function(d) {return yScale(d)})
            .attr('x', function (d) {return xScale(d)})
            .attr('y', function (d) {return height - yScale(d)});
    
    yGuide = d3.select('.bar svg').append('g')
            .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
            .call(yAxisTicks);

    xGuide = d3.select('.bar svg').append('g')
                .attr('transform', 'translate(' + margin.left + ',' + height + ')')
                .call(xAxisTicks);
    
});
    

//var ydata = [],
//    xdata = [];
//
//for (var i = 0; i < data.length; i++) {
//    xdata.push(data[i].Suburb);
//    ydata.push(+data[i].Avg_price);
//}
//
//var margin = {top: 0, right: 0, bottom: 20, left: 40},
//height = 300 - margin.top - margin.bottom,
//width = 300 - margin.left - margin.right;
//
//var yScale,
//    xScale,
//    yAxisValues,
//    xAxisValues,
//    yAxisTicks,
//    xAxisTicks;
//
//yScale = d3.scaleLinear()
//    .domain([0, d3.max(ydata)])
//    .range([0, height]);
//
//yAxisValues = d3.scaleLinear()
//    .domain([0, d3.max(ydata)])
//    .range([height, 0]);
//
//yAxisTicks = d3.axisLeft(yAxisValues).ticks(5);
//
//xScale = d3.scaleBand()
//    .domain(ydata)
//    .range([0, width])
//    .paddingInner(0.2);
//
//xAxisValues = d3.scaleBand()
//    .domain(xdata)
//    .range([0, width])
//    .paddingInner(0.2);
//
//xAxisTicks = d3.axisBottom(xAxisValues);
//
//d3.select('.bar')
//    .append('svg')
//    .attr('width', width + margin.left + margin.right)
//    .attr('height', height + margin.top + margin.bottom)
//    .style('background', '#C9D7D6')
//    .append('g')
//    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
//    .selectAll('rect')
//    .data(ydata)
//    .enter()
//        .append('rect')
//        .style('fill', '#C61C6F')
//        .attr('width', function(d) {return xScale.bandwidth()})
//        .attr('height', function(d) {return yScale(d)})
//        .attr('x', function (d) {return xScale(d)})
//        .attr('y', function (d) {return height - yScale(d)})
//
//yGuide = d3.select('.bar svg').append('g')
//            .attr('transform', 'translate(35,' + margin.top + ')')
//            .call(yAxisTicks);
//
//xGuide = d3.select('.bar svg').append('g')
//            .attr('transform', 'translate(' + margin.left + ',' + height + ')')
//            .call(xAxisTicks);



//var ydata = [100, 320, 530, 240, 150];
//var xdata = ['a', 'b', 'c', 'd', 'e'];

//var mychart =
//d3.select('.viz')
//    .selectAll('span')
//    .data(ydata)
//    .enter()
//    .append('span')
//    .style('background', 'red')
////    .style('padding-left', '5px')
////    .style('padding-right', '5px')
////    .style('margin-left', '3px')
//    .html(function (d) {return d})
//    .style('color', 'white');
//    
//mychart.transition()
//    .style('padding-left', '5px')
//    .style('padding-right', '5px')
//    .style('margin-left', '3px')
//    .duration(600)
//    .delay(500)


