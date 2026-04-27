// Select popup elements
var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopupbutton = document.getElementById("add-popup-button");

// Show popup when clicking "+"
addpopupbutton.addEventListener("click", function () {
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
});

// Select cancel button and close popup
var cancelpopup = document.getElementById("cancel-popup");
cancelpopup.addEventListener("click", function (event) {
    event.preventDefault();
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

// Select input fields
var container = document.querySelector(".container");
var addbook = document.getElementById("add-book");
var booktitleinput = document.getElementById("book-title-input");
var bookauthorinput = document.getElementById("book-author-input");
var bookdescriptioninput = document.getElementById("book-description-input");

// Add book functionality
addbook.addEventListener("click", function (event) {
    event.preventDefault();

    // Ensure all fields are filled
    if (!booktitleinput.value || !bookauthorinput.value || !bookdescriptioninput.value) {
        alert("Please fill in all fields!");
        return;
    }

    // Create new book container
    var div = document.createElement("div");
    div.setAttribute("class", "book_container");

    // Insert book details
    div.innerHTML = `
        <h2>${booktitleinput.value}</h2>
        <h5>${bookauthorinput.value}</h5>
        <p>${bookdescriptioninput.value}</p>
        <button onclick="deletebook(event)">Delete</button>
    `;

    // Append book to the container
    container.appendChild(div);

    // Close popup
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";

    // Clear input fields
    booktitleinput.value = "";
    bookauthorinput.value = "";
    bookdescriptioninput.value = "";
});

// Function to delete book
function deletebook(event) {
    event.target.parentElement.remove();
}
