export default function jsonToMarkdown(json: any): string {
  let markdown = "";
  for (const key of Object.keys(json)) {
    markdown += `## ${key}\n`;
    if (typeof json[key] === "object") {
      markdown += jsonToMarkdown(json[key]);
    } else {
      markdown += `${json[key]}\n`;
    }
  }
  return markdown;
}
