import csvToJson from "./csvToJson";

export default function jsonToCsv(value: string): string {
  let csv = csvToJson(value);

  const header = Object.keys(json[0]).join(",");
  csv += header + "\n";

  for (const obj of json) {
    const values = Object.values(obj)
      .map((value) => `"${value}"`)
      .join(",");
    csv += values + "\n";
  }

  return csv;
}
