const aboutLink = document.querySelector(".profile__button-edit");
const popup = document.querySelector(".popup");
const popupCloseButton = document.querySelector(".popup__close");
const saveButton = document.querySelector(".form__button-save");
const profileName = document.querySelector(".profile__name");
const profileText = document.querySelector(".profile__text");
const formElement = document.querySelector(".form");
const nameInput = document.querySelector("input[name='user-name']");
const aboutInput = document.querySelector("input[name='user-info']");

function openPopup() {
  popup.classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  aboutInput.value = profileText.textContent;
}

function closePopup() {
  popup.classList.remove("popup_opened");
}

aboutLink.addEventListener("click", openPopup);
popupCloseButton.addEventListener("click", closePopup);

function formSubmitHandler(evt) {
  evt.preventDefault();
  (profileName.textContent = nameInput.value),
    (profileText.textContent = aboutInput.value),
    closePopup();
}

formElement.addEventListener("submit", formSubmitHandler);
