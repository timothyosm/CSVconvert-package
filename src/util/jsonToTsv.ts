export default function jsonToTsv(json: any): string {
  let tsv = "";

   const header = Object.keys(json[0]).join("\t");
  tsv += header + "\n";

   json.forEach((data: any) => {
    const values = Object.values(data).join("\t");
    tsv += values + "\n";
  });

  return tsv;
}
