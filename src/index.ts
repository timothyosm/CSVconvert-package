import csvToJson from "./util/csvToJson";
import jsonToCsv from "./util/jsonToCsv";
import jsonToLatex from "./util/jsonToLatex";
import jsonToMarkdown from "./util/jsonToMarkdown";
import jsonToSQL from "./util/jsonToSQL";
import jsonToTable from "./util/jsonToTable";
import jsonToTsv from "./util/jsonToTsv";
import jsonToXml from "./util/jsonToXml";
import jsonToYaml from "./util/jsonToYaml";

export default {
  csv: jsonToCsv,
  latex: jsonToLatex,
  markdown: jsonToMarkdown,
  sql: jsonToSQL,
  table: jsonToTable,
  xml: jsonToXml,
  yaml: jsonToYaml,
  tsv: jsonToTsv,
  json: csvToJson
};
