import Papa from "papaparse"
import fs from "fs"

export function readCSVData(){
    const file = fs.readFileSync("TestData\\LoginData.csv", "utf-8");
    const testData = Papa.parse(file, {header: true});

    return testData.data;
}