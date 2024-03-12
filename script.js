// Function to check if a saved username exists
function checkSavedUsername() {
    const savedUserName = localStorage.getItem("user_name");
    if (savedUserName) {
        // A saved username exists, proceed with other logic (e.g., display welcome message)
        console.log(`Welcome back, ${savedUserName}!`);
    } else {
        // No saved username found, show the dialog box
        showNameDialog();
    }
}

// Function to show the name dialog
function showNameDialog() {
    const dialogBox = document.getElementById("dialog");
    dialogBox.style.display = "block"; // Show the dialog box
}

// Function to save the user's name
function saveUserName() {
    const nameInput = document.getElementById("nameInput").value.trim();
    if (nameInput !== "") {
        // Save the user's name (using local storage)
        localStorage.setItem("user_name", nameInput);
        console.log(`User name saved: ${nameInput}`);
        // Hide the dialog box after saving
        document.getElementById("dialog").style.display = "none";
    }
}

// Call the function to check saved username when the page loads
window.addEventListener("load", checkSavedUsername);

// Your existing code for sending messages goes here...
// Function to send a message
function sendMessage() {
    var inputText = document.getElementById("messageInput").value.trim(); // Get the value of the input field
    if (inputText !== "") {
        var chatList = document.getElementById("chatList");
        var newMessage = document.createElement("div");
        newMessage.textContent = inputText;
        newMessage.style.padding = "10px"; // Padding for each message
        newMessage.style.marginBottom = "10px"; // Margin bottom for each message
        newMessage.style.borderRadius = "30px"; // Set border radius of each message to 30px
        
        // Calculate the maximum width based on content length
        var contentLength = inputText.length;
        var maxPercentage = Math.min(5 + contentLength * 2, 50); // Adjust the multiplier as needed
        
        newMessage.style.maxWidth = maxPercentage + "%"; // Set maximum width
        
        // Styling based on sender
        if (isYourMessage()) {
            newMessage.style.backgroundColor = "#ADD8E6"; // Light blue for your messages
            newMessage.style.marginLeft = "auto"; // Move your messages to the right
        } else {
            newMessage.style.backgroundColor = "#F0F0F0"; // Light ash for others' messages
            newMessage.style.marginRight = "auto"; // Move others' messages to the left
        }
        
        chatList.appendChild(newMessage);
        chatList.scrollTop = chatList.scrollHeight; // Scroll to bottom
        document.getElementById("messageInput").value = ""; // Clear input after sending
    }
}

// Function to determine if the message is yours or not (you can replace this logic with your own)
function isYourMessage() {
    // Assuming you have some logic here to determine if the message is yours or not
    // For demonstration purposes, let's assume the message is always yours if it's sent by clicking the button
    return true;
}

// Event listener for Enter key press
document.getElementById("messageInput").addEventListener("keydown", function(event) {
    if (event.keyCode === 13) { // Check if the Enter key is pressed
        event.preventDefault(); // Prevent the default behavior of the Enter key (e.g., submitting a form)
        sendMessage(); // Call the sendMessage function
    }
});

// Event listener for image click
document.getElementById("sendButton").addEventListener("click", function() {
    sendMessage(); // Call the sendMessage function
});

// Dynamically create and append CSS to hide the scroll indication bar
var style = document.createElement('style');
style.textContent = `
#chatList {
    overflow-y: scroll; /* Enable vertical scrolling */
    scrollbar-width: none; /* Hide scrollbar for Firefox */
    -ms-overflow-style: none; /* Hide scrollbar for IE/Edge */
}

#chatList::-webkit-scrollbar {
    display: none; /* Hide scrollbar for WebKit (Chrome, Safari, etc.) */
}
`;
document.head.appendChild(style);
