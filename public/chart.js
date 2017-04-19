var marginChart = {top: 20, right: 20, bottom: 30, left: 50},
    widthChart = 500 - marginChart.left - marginChart.right,
    heightChart = 300 - marginChart.top - marginChart.bottom;


var chart = d3.select("#chart").append("svg")
    .attr("width", 500)
    .attr("height", 500)
    .append("g")
    .attr("transform", "translate(" + 5 + "," + 100 + ")");

var radiusChart = Math.min(200, 200);
var g = chart.append("g").attr("transform", "translate(" + widthChart / 2 + "," + heightChart / 2 + ")");


var chart2 = d3.select("#chart2").append("svg")
.attr("width", 500)
.attr("height", 500)
.append("g")
.attr("transform", "translate(" + 5 + "," + 100 + ")");
var g2 = chart2.append("g").attr("transform", "translate(" + widthChart / 2 + "," + heightChart / 2 + ")");

var colorChart = d3.scaleOrdinal(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

var pie = d3.pie()
    .sort(null)
    .value(function(d) { return d.population; });

var pathChart = d3.arc()
    .outerRadius(radiusChart - 10)
    .innerRadius(0);

var labelChart = d3.arc()
    .outerRadius(radiusChart - 40)
    .innerRadius(radiusChart - 70);

d3.csv("data.csv", function(d) {
  d.population = +d.population;
  return d;
}, function(error, data) {
  if (error) throw error;

  var arc = g.selectAll(".arc")
    .data(pie(data))
    .enter().append("g")
      .attr("class", "arc");

  arc.append("path")
      .attr("d", pathChart)
      .attr("fill", function(d) { return colorChart(d.data.age); });

  arc.append("text")
      .attr("transform", function(d) { return "translate(" + labelChart.centroid(d) + ")"; })
      .attr("dy", "0.20em")
      .text(function(d) { return d.data.age; }) ;
});




d3.csv("data1.csv", function(d) {
  d.population = +d.population;
  return d;
}, function(error, data) {
  if (error) throw error;

      var arc2 = g2.selectAll(".arc")
    .data(pie(data))
    .enter().append("g")
      .attr("class", "arc");

      arc2.append("path")
      .attr("d", pathChart)
      .attr("fill", function(d) { return colorChart(d.data.age); });

  arc2.append("text")
      .attr("transform", function(d) { return "translate(" + labelChart.centroid(d) + ")"; })
      .attr("dy", "0.20em")
      .text(function(d) { return d.data.age; });
});