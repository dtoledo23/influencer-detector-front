<template>
  <svg width="500" height="300"></svg>
</template>

<script>
  const d3 = require('d3');
  export default {
    mounted() {
      var svg = d3.select(this.$el);
      var width = +svg.attr('width');
      var height = +svg.attr('height');
      var margin = { top:20, left:0, bottom:30, right:0 };
      var chartWidth = width - (margin.left + margin.right);
      var chartHeight = height - (margin.top + margin.bottom);

      var color = d3.scaleOrdinal(d3.schemeCategory20);

      var simulation = d3.forceSimulation()
      .force("link", d3.forceLink().id(function(d) { return d.id; }))
      .force("charge", d3.forceManyBody())
      .force("center", d3.forceCenter(chartWidth / 2, chartHeight / 2));

      this.chartLayer = svg
      .append('g')
      .attr(
        "transform",
        `translate(${margin.left}, ${margin.top})`
        );
      this.arc = d3.arc()
      .outerRadius(chartHeight / 2)
      .innerRadius(chartHeight / 4)
      .padAngle(0.03)
      .cornerRadius(8)
      this.pieG = this.chartLayer
      .append("g")
      .attr(
        "transform",
        `translate(${chartWidth / 2}, ${chartHeight / 2})`
        )
      this.drawChart(this.chartData);
    },
    props: ['chartData'],
    watch: {
      chartData: function(newData) {
        this.drawChart(newData);
      }
    },
    methods: {
      drawChart: function(data) {
        var arcs = d3.pie()
        .sort(null)
        .value(function(d) { return d.value; })
        (data)

        var block = this.pieG.selectAll(".arc")
        .data(arcs)
        block.select('path').attr('d', this.arc)
        
        var newBlock = block
        .enter()
        .append("g")
        .classed("arc", true)
        
        newBlock.append("path")
        .attr("d", this.arc)
        .attr("id", function(d, i) { return "arc-" + i })
        .attr("stroke", "gray")
        .attr("fill", d => d3.interpolateCool(Math.random()))
        
        newBlock.append("text")
        .attr("dx", 10)
        .attr("dy", -5)
        .append("textPath")
        .attr("xlink:href", function(d, i) { return "#arc-" + i; })
        .text(function(d) { return d.data.name })
      },
      dragstarted: function(d) {
        if (!d3.event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      },
      dragged: function(d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
      },
      dragended: function(d) {
        if (!d3.event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      }
    }
  }
</script>
