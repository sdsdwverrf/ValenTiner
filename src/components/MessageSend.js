// Create a new element
var messageElement = document.createElement("div");

// Set the text content of the element
messageElement.textContent = "Thank you Buddhu";

// Style the element to make it fancy
messageElement.style.position = "fixed";
messageElement.style.top = "50%";
messageElement.style.left = "50%";
messageElement.style.transform = "translate(-50%, -50%)";
messageElement.style.fontSize = "48px";
messageElement.style.color = "purple";
messageElement.style.fontFamily = "Arial, sans-serif";
messageElement.style.fontWeight = "bold";
messageElement.style.textAlign = "center";

// Add the element to the body of the document
document.body.appendChild(messageElement);
