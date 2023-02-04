export default function jsonToLatex(json: any): string {
    let latex = "";
    for (const key in json) {
      if (json.hasOwnProperty(key)) {
        latex += `\\textbf{${key}:} ${json[key]}\\\\\n`;
      }
    }
    return latex;
  }
  