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
};

// Add Filter - Button Click
// add function to hold our date data, filtered and unfiltered
function handleClick() {
    // grab datetime value from filter
    let date = d3.select('#datetime').property('value');
    // set variable equal to original table data as default
    let filteredData = tableData;

    // if date exists (clicked/entered), filter data using the date
    if (date) {
        // apply filter to the table data to keep rows where datetime value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild table using filtered data
    // if no date entered, then filteredData will be original data
    buildTable(filteredData);
};

// Listen for click with D3 and then execute handleClick function
d3.selectAll('#filter-btn').on('click', handleClick);

// make sure table loads as soon as page does
// call buildTable using original data
buildTable(tableData);