const fs = require("fs");

function minifyJson(inputFile, outputFile) {
    const data = JSON.parse(fs.readFileSync(inputFile, "utf8"));
    const minified = JSON.stringify(data);
    fs.writeFileSync(outputFile, minified);
}

minifyJson("index.json", "index.min.json");
