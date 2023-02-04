export default function jsonToSQL(json: any, tableName: string): string {
  let columns = Object.keys(json).join(", ");
  let values = Object.values(json)
    .map((value) => `'${value}'`)
    .join(", ");
  return `INSERT INTO ${tableName} (${columns}) VALUES (${values});`;
}
