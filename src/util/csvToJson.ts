export default function csvToJson(csv: string): any {
  const lines = csv.split("\n");
  const headers = lines[0].split(",");

  let result = [];
  for (let i = 1; i < lines.length; i++) {
    const obj: { [key: string]: string } = {};
    const currentLine = lines[i].split(",");

    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentLine[j];
    }
    result.push(obj);
  }
  return JSON.stringify(result);
}
