/* Workers are used to delegate load bearing tasks in a different file from the main file
so that it does no lag or become unresponsive while the user in on the website.   */


// Listen for messages from the main thread
self.onmessage = function (event) {
    // Square the received number
    const squaredNumber = event.data * event.data;

    // Send the squared result back to the main thread
    self.postMessage(squaredNumber);
};
