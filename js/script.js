// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
// assign button (not yet visible)
const assignButton = document.querySelector(".assign");
// assigned items list (not yet visible)
const assignedItemsList = document.querySelector(".assigned-items");

const clearInput = function () {
  guestInput.value = "";
};

const addToList = function (guest) {
  const listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
};

const updateGuestCount = function () {
  const guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;
  if (guests.length === 8) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};

const assignItems = function () {
  const potluckItems = [
    "Veggie Nori Rolls",
    "Tomato & Mozzarella Caprese Skewers",
    "3-Cheese Tomato Tart",
    "Pesto Pasta Salad",
    "Tangy Carrot Slaw",
    "Sweet and Salty Watermelon Fruit Salad",
    "The Ultimate Grilled Zucchini Salad",
    "Lemon-Garlic Whipped Feta with Pesto",
  ];
  const allGuests = document.querySelectorAll(".guest-list li");
  for (let guest of allGuests) {
    const randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
    const randomPotluckItem = potluckItems[randomPotluckIndex];
    const listItem = document.createElement("li");
    listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
    assignedItemsList.append(listItem);
    potluckItems.splice(randomPotluckIndex, 1);
  }
};

addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;
  if (guest !== "") {
    addToList(guest);
    clearInput();
    updateGuestCount();
  }
});

assignButton.addEventListener("click", function () {
  assignItems();
  assignButton.disabled = true;
});
