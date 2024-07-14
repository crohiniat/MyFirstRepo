// display.js

// Assume you have the data from the Excel file (daily_routines.csv) in a variable called 'excelData'
// 'excelData' should be an array of rows, where each row is an array of cells (activity and time)

document.addEventListener('DOMContentLoaded', () => {
    const table = document.getElementById('routineTable');

    // Loop through the rows and populate the table
    excelData.forEach(row => {
        const newRow = table.insertRow();
        const cell1 = newRow.insertCell(0); // Activity
        const cell2 = newRow.insertCell(1); // Time
        cell1.textContent = row[0];
        cell2.textContent = row[1];
    });
});
