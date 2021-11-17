const aboutLink = document.querySelector(".profile__button-edit");
const popup = document.querySelector(".popup");
const popupCloseButton = document.querySelector(".popup__close");
const saveButton = document.querySelector(".form__button-save");

function openPopup() {
  popup.classList.add("popup_opened");
}

function closePopup() {
  popup.classList.remove("popup_opened");
}

aboutLink.addEventListener("click", openPopup);
popupCloseButton.addEventListener("click", closePopup);
saveButton.addEventListener("click", closePopup);

const profileName = document.querySelector(".profile__name");
const profileText = document.querySelector(".profile__text");
const formElement = document.querySelector(".form");
const nameInput = document.querySelector(".form__name");
const aboutInput = document.querySelector(".form__about");

nameInput.value = profileName.textContent;
aboutInput.value = profileText.textContent;

function formSubmitHandler(evt) {
  evt.preventDefault();
  (profileName.textContent = nameInput.value),
    (profileText.textContent = aboutInput.value);
}

formElement.addEventListener("submit", formSubmitHandler);
