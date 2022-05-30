// import the data from data.js
const tableData = data;

// Reference the HTML table using D3
var tbody = d3.select("tbody");

// Insert data to table using function - keeping code self contained
function buildTable(data) {
    //clear existing data
    tbody.html('');
    // loop through each row object
    data.forEach((dataRow) => {
        // append table body with table row tag
        let row = tbody.append('tr');
        // loop through each row value object
        Object.values(dataRow).forEach((val) => {
            // append a cell to each value with table data tag
            let cell = row.append('td');
            // add the values from object location
            cell.text(val);
        })
    });
}