var svg = d3.select("body")
    .append("svg");

var dataset = [
    { "year": "2015", "quarter": 2, "Bakken": 3500, "Barnett": 8000, "Delaware": 10000, "Eagle Ford": 9000, "Haynesville": 5000, "Marcellus": 10500, "Midcontinent": 5000, "Midland": 4000, "Tuscaloosa Marina": 5500, "Permian": 5000 },
    { "year": "2015", "quarter": 3, "Bakken": 1500, "Barnett": 3500, "Delaware": 3000, "Eagle Ford": 4000, "Haynesville": 5000, "Marcellus": 9500, "Midcontinent": 9200, "Midland": 8000, "Tuscaloosa Marina": 8100, "Permian": 16000 },
    { "year": "2015", "quarter": 4, "Bakken": 1200, "Barnett": 500, "Delaware": 4000, "Eagle Ford": 6000, "Haynesville": 5500, "Marcellus": 5000, "Midcontinent": 5200, "Midland": 6000, "Tuscaloosa Marina": 7000, "Permian": 4000 },
    { "year": "2016", "quarter": 1, "Bakken": 5000, "Barnett": 6000, "Delaware": 5000, "Eagle Ford": 5000, "Haynesville": 6000, "Marcellus": 2000, "Midcontinent": 3000, "Midland": 16000, "Tuscaloosa Marina": 8000, "Permian": 4500 },
    { "year": "2016", "quarter": 2, "Bakken": 1100, "Barnett": 6500, "Delaware": 3000, "Eagle Ford": 6500, "Haynesville": 6000, "Marcellus": 6000, "Midcontinent": 6000, "Midland": 6500, "Tuscaloosa Marina": 6000, "Permian": 12000 },
    { "year": "2016", "quarter": 3, "Bakken": 1500, "Barnett": 6500, "Delaware": 4000, "Eagle Ford": 7500, "Haynesville": 7000, "Marcellus": 5500, "Midcontinent": 6500, "Midland": 6500, "Tuscaloosa Marina": 7000, "Permian": 7500 },
    { "year": "2016", "quarter": 4, "Bakken": 1000, "Barnett": 4000, "Delaware": 4000, "Eagle Ford": 1500, "Haynesville": 4000, "Marcellus": 4000, "Midcontinent": 3500, "Midland": 3500, "Tuscaloosa Marina": 4000, "Permian": 8500 },
    { "year": "2017", "quarter": 1, "Bakken": 3800, "Barnett": 3000, "Delaware": 4500, "Eagle Ford": 3500, "Haynesville": 8000, "Marcellus": 20000, "Midcontinent": 5000, "Midland": 5000, "Tuscaloosa Marina": 3500, "Permian": 7500 },
]