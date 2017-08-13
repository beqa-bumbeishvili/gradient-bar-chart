defaultFont = "Helvetica";

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

setLegendForEachValue();
setAccumulativeSum();

var y = d3.scaleLinear()
    .range([350, 0])
    .domain([0, 72500])

var yAxis = d3.axisLeft(y)
    .ticks(5)
    .tickSize(0);

var svg = d3.select("body")
    .append("svg")
    .attr("height", 800)
    .attr("width", 900)
    .attr('font-family', defaultFont);

var group = svg
    .selectAll("g")
    .data(mainDataObject.bars)
    .enter()
    .append("g")
    .attr("transform", function (d, i) { return "translate(" + i * 85 + "," + 30 + ")"; });

var axisGroup = svg.append("g")
    .call(yAxis)
    .attr("transform", "translate(" + 800 + "," + 182 + ")")
    .attr('font-family', defaultFont)
    .selectAll(".domain").attr("opacity", 0);

var rect = group.selectAll("rect")
    .data(function (d) { return d.values; })
    .enter()
    .append("rect")
    .attr("x", 100)
    .attr("y", 500)
    .transition()
    .duration(1000)
    .ease(d3.easeLinear)
    .attr("y", function (d, i) {
        return 500 - d.accumulativeSum / 220 + 1;
    })
    .attr("width", 40)
    .attr("height", function (d, i) {
        return d.value / 220 + 1;
    })
    .attr("fill", function (d, i) {
        return d.legend.color;
    })


function setAccumulativeSum() {
    for (var i = 0; i < mainDataObject.bars.length; i++) {
        bar = mainDataObject.bars[i];
        for (var j = 0; j < bar.values.length; j++) {
            element = bar.values[j];
            element.accumulativeSum = j == 0 ? element.value : element.value + bar.values[j - 1].accumulativeSum
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


// var dataset = [
//     [{ "name": "Bakken", "value": 3500 }, { "name": "Barnett", "value": 8000 }, { "name": "Delaware", "value": 10000 }, { "name": "Eagle Ford", "value": 9000 }, { "name": "Haynesville", "value": 5000 }, { "name": "Marcellus", "value": 10500 }, { "name": "Midcontinent", "value": 5000 }, { "name": "Midland", "value": 4000 }, { "name": "Tuscaloosa Marina", "value": 5500 }, { "name": "Permian", "value": 5000 }],
//     [{ "name": "Bakken", "value": 1500 }, { "name": "Barnett", "value": 3500 }, { "name": "Delaware", "value": 3000 }, { "name": "Eagle Ford", "value": 4000 }, { "name": "Haynesville", "value": 5000 }, { "name": "Marcellus", "value": 9500 }, { "name": "Midcontinent", "value": 9200 }, { "name": "Midland", "value": 8000 }, { "name": "Tuscaloosa Marina", "value": 8100 }, { "name": "Permian", "value": 16000 }],
//     [{ "name": "Bakken", "value": 1200 }, { "name": "Barnett", "value": 500 }, { "name": "Delaware", "value": 4000 }, { "name": "Eagle Ford", "value": 6000 }, { "name": "Haynesville", "value": 5500 }, { "name": "Marcellus", "value": 5000 }, { "name": "Midcontinent", "value": 5200 }, { "name": "Midland", "value": 6000 }, { "name": "Tuscaloosa Marina", "value": 7000 }, { "name": "Permian", "value": 4000 }],
//     [{ "name": "Bakken", "value": 5000 }, { "name": "Barnett", "value": 6000 }, { "name": "Delaware", "value": 5000 }, { "name": "Eagle Ford", "value": 5000 }, { "name": "Haynesville", "value": 6000 }, { "name": "Marcellus", "value": 2000 }, { "name": "Midcontinent", "value": 3000 }, { "name": "Midland", "value": 16000 }, { "name": "Tuscaloosa Marina", "value": 8000 }, { "name": "Permian", "value": 4500 }],
//     [{ "name": "Bakken", "value": 1100 }, { "name": "Barnett", "value": 6500 }, { "name": "Delaware", "value": 3000 }, { "name": "Eagle Ford", "value": 6500 }, { "name": "Haynesville", "value": 6000 }, { "name": "Marcellus", "value": 6000 }, { "name": "Midcontinent", "value": 6000 }, { "name": "Midland", "value": 6500 }, { "name": "Tuscaloosa Marina", "value": 6000 }, { "name": "Permian", "value": 12000 }],
//     [{ "name": "Bakken", "value": 1500 }, { "name": "Barnett", "value": 6500 }, { "name": "Delaware", "value": 4000 }, { "name": "Eagle Ford", "value": 7500 }, { "name": "Haynesville", "value": 7000 }, { "name": "Marcellus", "value": 5500 }, { "name": "Midcontinent", "value": 6500 }, { "name": "Midland", "value": 6500 }, { "name": "Tuscaloosa Marina", "value": 7000 }, { "name": "Permian", "value": 7500 }],
//     [{ "name": "Bakken", "value": 1000 }, { "name": "Barnett", "value": 4000 }, { "name": "Delaware", "value": 4000 }, { "name": "Eagle Ford", "value": 1500 }, { "name": "Haynesville", "value": 4000 }, { "name": "Marcellus", "value": 4000 }, { "name": "Midcontinent", "value": 3500 }, { "name": "Midland", "value": 3500 }, { "name": "Tuscaloosa Marina", "value": 4000 }, { "name": "Permian", "value": 8500 }],
//     [{ "name": "Bakken", "value": 3800 }, { "name": "Barnett", "value": 3000 }, { "name": "Delaware", "value": 4500 }, { "name": "Eagle Ford", "value": 3500 }, { "name": "Haynesville", "value": 8000 }, { "name": "Marcellus", "value": 20000 }, { "name": "Midcontinent", "value": 5000 }, { "name": "Midland", "value": 5000 }, { "name": "Tuscaloosa Marina", "value": 3500 }, { "name": "Permian", "value": 7500 }],
// ];