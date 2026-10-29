const fs = require("fs/promises");
const path = require("path");

async function readJson(fileName) {
  const filePath = path.join(__dirname, "..", "data", fileName);
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

async function writeJson(fileName, data) {
  const filePath = path.join(__dirname, "..", "data", fileName);
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

module.exports = {
  readJson,
  writeJson
};