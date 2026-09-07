// Get elements from the HTML
const changeButton = document.getElementById("changeButton");
const message = document.getElementById("message");

const favoriteInput = document.getElementById("favoriteInput");
const addButton = document.getElementById("addButton");
const favoriteList = document.getElementById("favoriteList");

// Requirement 1: Button changes content
changeButton.addEventListener("click", function() {
  message.textContent = "You clicked the button! JavaScript is working!";
});

// Requirement 2: Style changes as the user types
favoriteInput.addEventListener("input", function() {
  if (favoriteInput.value.length > 0) {
    favoriteInput.style.backgroundColor = "#e6ffe6";
  } else {
    favoriteInput.style.backgroundColor = "white";
  }
});

// Requirement 3: Dynamically add items to a list
addButton.addEventListener("click", function() {
  const favoriteText = favoriteInput.value.trim();

  if (favoriteText !== "") {
    const newItem = document.createElement("li");

    newItem.textContent = favoriteText;

    favoriteList.appendChild(newItem);

    favoriteInput.value = "";
    favoriteInput.style.backgroundColor = "white";
  }
});