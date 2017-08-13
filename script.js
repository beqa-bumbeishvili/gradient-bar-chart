var mainDataObject = {
  legends: [{ name: "Bakken", color: "#E9DF60", id: 1 }, { name: "Barnett", color: "#AED367", id: 2 }, { name: "Delaware", color: "#79C275", id: 3 }, { name: "Eagle Ford", color: "#4CAD82", id: 4 }, { name: "Haynesville", color: "#2E9789", id: 5 }, { name: "Marcellus", color: "#2D7F86", id: 6 }, { name: "Midcontinent", color: "#3A677B", id: 7 }, { name: "Midland", color: "#444F66", id: 8 }, { name: "Tuscaloosa Marina", color: "#45384D", id: 9 }, { name: "Permian", color: "#3C2533", id: 10 }],
  bars: [
    { label: "Q2 15'", values: [{ legendId: 1, value: 3500 }, { legendId: 2, value: 8000 }, { legendId: 3, value: 10000 }, { legendId: 4, value: 9000 }, { legendId: 5, value: 5000 }, { legendId: 6, value: 10500 }, { legendId: 7, value: 5000 }, { legendId: 8, value: 4000 }, { legendId: 9, value: 5500 }, { legendId: 10, value: 5000 }] },
    { label: "Q3 15'", values: [{ legendId: 1, value: 1500 }, { legendId: 2, value: 3500 }, { legendId: 3, value: 3000 }, { legendId: 4, value: 4000 }, { legendId: 5, value: 5000 }, { legendId: 6, value: 9500 }, { legendId: 7, value: 9200 }, { legendId: 8, value: 8000 }, { legendId: 9, value: 8100 }, { legendId: 10, value: 16000 }] },
    { label: "Q4 15'", values: [{ legendId: 1, value: 1200 }, { legendId: 2, value: 500 }, { legendId: 3, value: 4000 }, { legendId: 4, value: 6000 }, { legendId: 5, value: 5500 }, { legendId: 6, value: 5000 }, { legendId: 7, value: 5200 }, { legendId: 8, value: 6000 }, { legendId: 9, value: 7000 }, { legendId: 10, value: 4000 }] },
    { label: "Q1 16'", values: [{ legendId: 1, value: 5000 }, { legendId: 2, value: 6000 }, { legendId: 3, value: 5000 }, { legendId: 4, value: 5000 }, { legendId: 5, value: 6000 }, { legendId: 6, value: 2000 }, { legendId: 7, value: 3000 }, { legendId: 8, value: 16000 }, { legendId: 9, value: 8000 }, { legendId: 10, value: 4500 }] },
    { label: "Q2 16'", values: [{ legendId: 1, value: 1100 }, { legendId: 2, value: 6500 }, { legendId: 3, value: 3000 }, { legendId: 4, value: 6500 }, { legendId: 5, value: 6000 }, { legendId: 6, value: 6000 }, { legendId: 7, value: 6000 }, { legendId: 8, value: 6500 }, { legendId: 9, value: 6000 }, { legendId: 10, value: 12000 }] },
    { label: "Q3 16'", values: [{ legendId: 1, value: 1100 }, { legendId: 2, value: 6500 }, { legendId: 3, value: 3000 }, { legendId: 4, value: 6500 }, { legendId: 5, value: 6000 }, { legendId: 6, value: 6000 }, { legendId: 7, value: 6000 }, { legendId: 8, value: 6500 }, { legendId: 9, value: 6000 }, { legendId: 10, value: 12000 }] },
    { label: "Q4 16'", values: [{ legendId: 1, value: 1000 }, { legendId: 2, value: 4000 }, { legendId: 3, value: 4000 }, { legendId: 4, value: 1500 }, { legendId: 5, value: 4000 }, { legendId: 6, value: 4000 }, { legendId: 7, value: 3500 }, { legendId: 8, value: 3500 }, { legendId: 9, value: 4000 }, { legendId: 10, value: 8500 }] },
    { format: "YTD", label: "Q1 17'", values: [{ legendId: 1, value: 3800 }, { legendId: 2, value: 3000 }, { legendId: 3, value: 4500 }, { legendId: 4, value: 3500 }, { legendId: 5, value: 8000 }, { legendId: 6, value: 20000 }, { legendId: 7, value: 5000 }, { legendId: 8, value: 5000 }, { legendId: 9, value: 3500 }, { legendId: 10, value: 7500 }] }
  ],
  name: "Deal Value",
  format: "US$ MM",
  description: "Place holder for X axis description"
}
var defaultFont = "Helvetica";
var svgHeight = 800;
var svgWidth = 800;
var barsCount = mainDataObject.bars.length;
var totalValueAverage = getArithmeticAverage();

setLegendForEachValue();
setAccumulativeSum();

var y = d3.scaleLinear()
  .range([350, 0])
  .domain([0, getHighestBarAccumulativeSum()]);

var yAxis = d3.axisLeft(y)
  .ticks(5)
  .tickSize(0);

var svg = d3.select("body")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth)
  .attr('font-family', defaultFont);

var groups = svg
  .selectAll("g")
  .data(mainDataObject.bars)
  .enter()
  .append("g")
  .attr("transform", function (d, i) { return "translate(" + i * (svgWidth / (barsCount + 2)) + "," + 0 + ")"; });

var quarterTexts = svg.selectAll("g")
  .append("text")
  .attr("x", function (d, i) {
    return svgWidth / barsCount;
  })
  .attr("y", svgHeight / 2 + 50)
  .text(function (d, i) {
    return d.label;
  })
  .attr({
    "text-anchor": "middle",
    "font-family": "helvetica",
    "font-size": 14,
    "fill": "teal"
  });

var axisGroup = svg.append("g")
  .call(yAxis)
  .attr("transform", "translate(" + svgWidth + "," + 50 + ")")
  .attr('font-family', defaultFont)
  .selectAll(".domain").attr("opacity", 0);

var rect = groups.selectAll("rect")
  .data(function (d) { return d.values; })
  .enter()
  .append("rect")
  .attr("x", function (d, i) {
    return svgWidth / barsCount;
  })
  .attr("y", svgHeight / 2)
  .transition()
  .duration(1000)
  .ease(d3.easeLinear)
  .attr("y", function (d, i) {
    return svgHeight / 2 - d.accumulativeSum / (totalValueAverage / 30) + 1;
  })
  .attr("width", svgWidth / barsCount / 2.5)
  .attr("height", function (d, i) {
    return d.value / (totalValueAverage / 30) + 1;
  })
  .attr("fill", function (d, i) {
    return d.legend.color;
  });

var placeHolderX = svg.append("text")
  .text(mainDataObject.description)
  .attr("x", svgWidth / 2 - 100)
  .attr("y", svgHeight / 2 + 100);

var legendsWrapper = svg.append("g")
  .attr("transform", function (d, i) { return "translate(" + 100 + "," + 500 + ")"; });

var legendGroups = legendsWrapper
  .selectAll("g")
  .data(mainDataObject.legends)
  .enter()
  .append("g");

var legendRect = legendGroups
  .append("rect")
  .attr("x", function (d, i) {
    return i % 5 * 125;
  })
  .attr("y", function (d, i) {
    return i < 5 ? 50 : 100
  })
  .attr("width", 20)
  .attr("height", 20)
  .attr("fill", function (d) {
    return d.color;
  });

var legendText = legendGroups
  .append("text")
  .text(function (d) {
    return d.name;
  })
  .attr("x", function (d, i) {
    return i % 5 * 125 + 25;
  })
  .attr("y", function (d, i) {
    return i < 5 ? 65 : 115
  });


function setAccumulativeSum() {
  for (var i = 0; i < mainDataObject.bars.length; i++) {
    bar = mainDataObject.bars[i];
    for (var j = 0; j < bar.values.length; j++) {
      element = bar.values[j];
      element.accumulativeSum = j == 0 ? element.value : element.value + bar.values[j - 1].accumulativeSum;
    }
  }
}

function setLegendForEachValue() {
  for (var i = 0; i < mainDataObject.bars.length; i++) {
    bar = mainDataObject.bars[i];
    for (var j = 0; j < bar.values.length; j++) {
      value = bar.values[j];
      value.legend = findLegendById(value.legendId);
    }
  }
}

function findLegendById(id) {
  legends = mainDataObject.legends;
  var legend = {}
  for (var i = 0; i < legends.length; i++) {
    if (legends[i].id == id)
      legend = legends[i];
  }
  return legend;
}

function getHighestBarAccumulativeSum() {
  firstBarValues = mainDataObject.bars[0].values
  max = firstBarValues[firstBarValues.length - 1].accumulativeSum
  for (var i = 1; i < mainDataObject.bars.length; i++) {
    barValues = mainDataObject.bars[i].values;
    max = max > barValues[barValues.length - 1].accumulativeSum ? max : barValues[barValues.length - 1].accumulativeSum;
  }
  return max;
}

function getArithmeticAverage() {
  totalLength = 0;
  totalSum = 0;
  for (var i = 0; i < mainDataObject.bars.length; i++) {
    bar = mainDataObject.bars[i];
    for (var j = 0; j < bar.values.length; j++) {
      totalSum += bar.values[j].value;
      totalLength += 1;
    }
  }
  return totalSum / totalLength;
}