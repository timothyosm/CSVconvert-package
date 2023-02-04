export default function jsonToYaml(json: any): string {
  let yaml = "";
  for (const key of Object.keys(json)) {
    const value = json[key];
    if (typeof value === "string") {
      yaml += `${key}: "${value}"\n`;
    } else if (typeof value === "number") {
      yaml += `${key}: ${value}\n`;
    } else if (typeof value === "boolean") {
      yaml += `${key}: ${value}\n`;
    } else if (Array.isArray(value)) {
      yaml += `${key}:\n`;
      for (const item of value) {
        yaml += `- ${item}\n`;
      }
    } else if (typeof value === "object") {
      yaml += `${key}:\n`;
      yaml += jsonToYaml(value);
    }
  }
  return yaml;
}
