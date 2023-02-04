<p><strong>CSV to JSON</strong></p>
<p>This function takes a string in CSV (Comma Separated Value) format and returns the equivalent JSON (JavaScript Object Notation) representation of the data.</p>
<p>To use the function, you can simply pass a string in CSV format to the function as an argument:</p>
<pre><code>const csvData = "Name,Age,City\nJohn,30,New York\nJane,25,London";
const jsonData = csvToJson(csvData);
console.log(jsonData);
</code></pre>
<p>Output:</p>
<pre><code>[{"Name":"John","Age":"30","City":"New York"},{"Name":"Jane","Age":"25","City":"London"}]
</code></pre>
<p>As you can see, the function splits the CSV data into lines and then splits each line into values using the <code>,</code> separator. The first line is assumed to contain the header names, which are used as keys in the JSON representation. The values from each line are then used to create an object with keys-values, and all objects are added to an array that is finally returned as a stringified JSON.</p>
<p><strong>JSON to CSV</strong><br>
This function takes an array of JSON objects as input and returns a CSV string representation of the data.</p>
<p>Here’s how you can use this function:</p>
<pre><code>const json = [  { name: "John Doe", age: 32, city: "New York" },  { name: "Jane Doe", age: 29, city: "London" },];

const csv = jsonToCsv(json);
console.log(csv);
</code></pre>

<p>Output:</p>
<pre><code>name,age,city
"John Doe",32,"New York"
"Jane Doe",29,"London"
</code></pre>
<p>Note: The function uses <code>Object.keys</code> to get the keys of the first object in the JSON array to generate the header row, and then <code>Object.values</code> to get the values of each object in the JSON array to generate the data rows. The values are surrounded by double quotes (<code>"</code>) to properly handle values that contain commas.</p>
