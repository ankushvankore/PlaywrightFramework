import fs from "fs"

export function readJsonData(filePath){
    let fileData = fs.readFileSync(filePath, "utf-8");
    let jsonData = JSON.parse(fileData);
    
    return jsonData;
}