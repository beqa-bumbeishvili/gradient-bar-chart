var dataset = [
    [{ "name": "Bakken", "value": 3500 }, { "name": "Barnett", "value": 8000 }, { "name": "Delaware", "value": 10000 }, { "name": "Eagle Ford", "value": 9000 }, { "name": "Haynesville", "value": 5000 }, { "name": "Marcellus", "value": 10500 }, { "name": "Midcontinent", "value": 5000 }, { "name": "Midland", "value": 4000 }, { "name": "Tuscaloosa Marina", "value": 5500 }, { "name": "Permian", "value": 5000 }],
    [{ "name": "Bakken", "value": 1500 }, { "name": "Barnett", "value": 3500 }, { "name": "Delaware", "value": 3000 }, { "name": "Eagle Ford", "value": 4000 }, { "name": "Haynesville", "value": 5000 }, { "name": "Marcellus", "value": 9500 }, { "name": "Midcontinent", "value": 9200 }, { "name": "Midland", "value": 8000 }, { "name": "Tuscaloosa Marina", "value": 8100 }, { "name": "Permian", "value": 16000 }],
    [{ "name": "Bakken", "value": 1200 }, { "name": "Barnett", "value": 500 }, { "name": "Delaware", "value": 4000 }, { "name": "Eagle Ford", "value": 6000 }, { "name": "Haynesville", "value": 5500 }, { "name": "Marcellus", "value": 5000 }, { "name": "Midcontinent", "value": 5200 }, { "name": "Midland", "value": 6000 }, { "name": "Tuscaloosa Marina", "value": 7000 }, { "name": "Permian", "value": 4000 }],
    [{ "name": "Bakken", "value": 5000 }, { "name": "Barnett", "value": 6000 }, { "name": "Delaware", "value": 5000 }, { "name": "Eagle Ford", "value": 5000 }, { "name": "Haynesville", "value": 6000 }, { "name": "Marcellus", "value": 2000 }, { "name": "Midcontinent", "value": 3000 }, { "name": "Midland", "value": 16000 }, { "name": "Tuscaloosa Marina", "value": 8000 }, { "name": "Permian", "value": 4500 }],
    [{ "name": "Bakken", "value": 1100 }, { "name": "Barnett", "value": 6500 }, { "name": "Delaware", "value": 3000 }, { "name": "Eagle Ford", "value": 6500 }, { "name": "Haynesville", "value": 6000 }, { "name": "Marcellus", "value": 6000 }, { "name": "Midcontinent", "value": 6000 }, { "name": "Midland", "value": 6500 }, { "name": "Tuscaloosa Marina", "value": 6000 }, { "name": "Permian", "value": 12000 }],
    [{ "name": "Bakken", "value": 1500 }, { "name": "Barnett", "value": 6500 }, { "name": "Delaware", "value": 4000 }, { "name": "Eagle Ford", "value": 7500 }, { "name": "Haynesville", "value": 7000 }, { "name": "Marcellus", "value": 5500 }, { "name": "Midcontinent", "value": 6500 }, { "name": "Midland", "value": 6500 }, { "name": "Tuscaloosa Marina", "value": 7000 }, { "name": "Permian", "value": 7500 }],
    [{ "name": "Bakken", "value": 1000 }, { "name": "Barnett", "value": 4000 }, { "name": "Delaware", "value": 4000 }, { "name": "Eagle Ford", "value": 1500 }, { "name": "Haynesville", "value": 4000 }, { "name": "Marcellus", "value": 4000 }, { "name": "Midcontinent", "value": 3500 }, { "name": "Midland", "value": 3500 }, { "name": "Tuscaloosa Marina", "value": 4000 }, { "name": "Permian", "value": 8500 }],
    [{ "name": "Bakken", "value": 3800 }, { "name": "Barnett", "value": 3000 }, { "name": "Delaware", "value": 4500 }, { "name": "Eagle Ford", "value": 3500 }, { "name": "Haynesville", "value": 8000 }, { "name": "Marcellus", "value": 20000 }, { "name": "Midcontinent", "value": 5000 }, { "name": "Midland", "value": 5000 }, { "name": "Tuscaloosa Marina", "value": 3500 }, { "name": "Permian", "value": 7500 }],
];

var svg = d3.select("body")
    .append("svg")
    .attr("height", 800)
    .attr("width", 800);

var group = svg
    .selectAll("g")
    .data(dataset)
    .enter()
    .append("g")
    .attr("transform", "translate(" + function(d,i){return i;} + "," + 30 + ")");

var rect = group.selectAll("rect")
    .data(function (d) { return d; })
    .enter()
    .append("rect")
    .attr("x", 100)
    .attr("y", function (d, i) {
        return 480 - (i * 40)
    })
    .attr("width", 40)
    .attr("height", 60)
    .attr("fill", function (d, i) {
        return getProperColor(d);
    });

function getProperColor(object) {
    color = "";
    switch (object['name']) {
        case "Bakken":
            color = "#E9DF60";
            break;
        case "Barnett":
            color = "#AED367";
            break;
        case "Delaware":
            color = "#79C275";
            break;
        case "Eagle Ford":
            color = "#4CAD82";
            break;
        case "Haynesville":
            color = "#2E9789";
            break;
        case "Marcellus":
            color = "#2D7F86";
            break;
        case "Midcontinent":
            color = "#3A677B";
            break;
        case "Midland":
            color = "#444F66";
            break;
        case "Tuscaloosa Marina":
            color = "#45384D";
            break;
        case "Permian":
            color = "#3C2533";
            break;
        default:
            color = "teal";
    }

    return color;
}