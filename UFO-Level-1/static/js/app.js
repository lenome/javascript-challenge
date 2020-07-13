// from data.js
var tableData = data;

var button = d3.select("#filter-btn");

var form = d3.select("#form")

button.on("click", runEnter);
form.on("submit", runEnter);

ufoTable = d3.select("#ufo-table");

tableData.forEach(sighting => {
    row = ufoTable.append('tr');

    Object.entries(sighting).forEach(([key,value]) => {
        row.append('td').text(value);
    });
})

function runEnter() {

    //Prevents page from refreshing by default
    d3.event.preventDefault();

    //Selects the datetime form using id datetime
    var inputElement = d3.select("#datetime");

    //Assigns the value of the form to a variable
    var inputValue = inputElement.property('value');
    //Prints the date in the console
    console.log(inputValue);

    //Checks if any data was entered in the filter box.
    //If no data was entered, exits the function
    if (inputValue === ""){
        alert("No value entered");
        return console.log("No value entered");
    }
    
    //If there is something in the form, the function continues
    else{

        /*Uses filter function and arrow function to run through the data
        and stores the entries that match the input date in a new array*/
        var filteredDate = tableData.filter(date => date.datetime === inputValue);
        console.log(filteredDate);
        
        if ( filteredDate.length === 0){
            console.log("No data on that date exists");
            window.alert("No data exists on that date!");
        }

        else {
            //Reset the table on each click
            ufoTable.html("");
            
            //Add the header back to the empty table
            ufoTableHeader = ufoTable.append('thead').append('tr');
            ufoTableHeader.append('th').attr('class', 'table-head').text("Date");
            ufoTableHeader.append('th').attr('class', 'table-head').text("City");
            ufoTableHeader.append('th').attr('class', 'table-head').text("State");
            ufoTableHeader.append('th').attr('class', 'table-head').text("Country");
            ufoTableHeader.append('th').attr('class', 'table-head').text("Shape");
            ufoTableHeader.append('th').attr('class', 'table-head').text("Duration");
            ufoTableHeader.append('th').attr('class', 'table-head').text("Comments");

            //Add tbody tag to append the filtered data
            ufoTable.append('tbody');

            //Adds a row for each entry in the filtered data
            filteredDate.forEach(date => {
                row = ufoTable.select('tbody').append('tr');

                //Runs through the values of each entry and adds them to the row
                Object.entries(date).forEach(([key,value]) => {
                    row.append('td').text(value);
                })
            })
        
        }
        }
}

