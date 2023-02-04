export default function jsonToTable(json: any) {
  let table = "<table>";
  let headers = Object.keys(json[0]);

  table += "<tr>";
  for (let header of headers) {
    table += "<th>" + header + "</th>";
  }
  table += "</tr>";

  for (let row of json) {
    table += "<tr>";
    for (let header of headers) {
      table += "<td>" + row[header] + "</td>";
    }
    table += "</tr>";
  }

  table += "</table>";
  return table;
}
