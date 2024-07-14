// script.js

function saveToExcel() {
    const activity = document.getElementById('activity').value;
    const time = document.getElementById('time').value;

    // Create a CSV-like string (customize this format as needed)
    const csvData = `${activity},${time}\n`;

    // Create a Blob (Excel-compatible format)
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });

    // Save the Blob as a file
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'daily_routines.csv';
    link.click();
}
