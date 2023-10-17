let myWorker;

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Find the button with the id 'calculateButton'
    const button = document.getElementById('calculateButton');
    
    // Attach an event listener to the button for the 'click' event
    button.addEventListener('click', startWorker);
});

// Function to be called when the button is clicked
function startWorker() {
    // Find the input element with the id 'numberInput'
    const numberInput = document.getElementById('numberInput');
    
    // Find the element where the result will be displayed
    const resultElement = document.getElementById('result');

    // Check if the browser supports Web Workers
    if (typeof Worker !== 'undefined') {
        // If a worker is not already created, create one
        if (!myWorker) {
            myWorker = new Worker('worker.js');

            // Set up an event listener for messages from the worker
            myWorker.onmessage = function (event) {
                // Update the result element with the calculated square
                resultElement.textContent = 'Square: ' + event.data;
            };
        }

        // Get the numeric value from the input
        const inputNumber = parseInt(numberInput.value, 10);

        // Send the input number to the worker
        myWorker.postMessage(inputNumber);
    } else {
        // If Web Workers are not supported, display a message
        resultElement.textContent = 'Web Workers are not supported in this browser.';
    }
}

