export default function jsonToXml(json: any): string {
  let xml = "";
  for (const key in json) {
    if (json.hasOwnProperty(key)) {
      if (typeof json[key] === "object") {
        xml += `<${key}>${jsonToXml(json[key])}</${key}>`;
      } else {
        xml += `<${key}>${json[key]}</${key}>`;
      }
    }
  }
  return xml;
}
