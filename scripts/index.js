const aboutLink = document.querySelector(".edit-button");
const popup = document.querySelector(".popup");
const popupCloseButton = document.querySelector(".popup__close");
const saveButton = document.querySelector(".form__button");

function open() {
  popup.classList.add("popup_opened");
}

function close() {
  popup.classList.remove("popup_opened");
  saveButton.classList.remove("popup_opened");
}

aboutLink.addEventListener("click", open);
popupCloseButton.addEventListener("click", close);
saveButton.addEventListener("click", close);

let profileName = document.querySelector(".profile__name");
let profileText = document.querySelector(".profile__text");
let formElement = document.querySelector(".form");
let nameInput = document.querySelector(".form__name");
let aboutInput = document.querySelector(".form__about");

nameInput.value = profileName.textContent;
aboutInput.value = profileText.textContent;

function formSubmitHandler(evt) {
  evt.preventDefault();
  (profileName.textContent = nameInput.value),
    (profileText.textContent = aboutInput.value);
}

formElement.addEventListener("submit", formSubmitHandler);
