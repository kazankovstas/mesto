const aboutLink = document.querySelector(".profile__button-edit");
const popup = document.querySelector(".popup");
const popupCloseButton = document.querySelector(".popup__close");
const saveButton = document.querySelector(".form__button-save");
const profileName = document.querySelector(".profile__name");
const profileText = document.querySelector(".profile__text");
const formElement = document.querySelector(".form");
const nameInput = document.querySelector("input[name='user-name']");
const aboutInput = document.querySelector("input[name='user-info']");
const placeNameInput = document.querySelector("input[name='place-name']");
const placeLinkInput = document.querySelector("input[name='place-link']");

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
// Закрытие попапа клавишей Escape
document.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    popup.classList.remove("popup_opened");
  }
});

// Кнопка "ДОБАВИТЬ"
const popupNewCard = document.getElementById("newCard");
const popupClose = document.getElementById("popupClose");
const addCard = document.querySelector(".profile__button-add");

addCard.addEventListener("click", function () {
  popupNewCard.classList.add("popup_opened");
});

popupClose.addEventListener("click", function () {
  popupNewCard.classList.remove("popup_opened");
});

document.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    popupNewCard.classList.remove("popup_opened");
  }
});
// Закрытие попап кликом вне его

// Template
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    alt: "Изображение",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    alt: "Изображение",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    alt: "Изображение",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    alt: "Изображение",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    alt: "Изображение",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    alt: "Изображение",
  },
];

const cardList = document.querySelector(".elements__list");
const templateEl = document.querySelector("#elements-template");

function render() {
  const cards = initialCards.map(function (item) {
    return getItem(item);
  });

  cardList.append(...cards);
}

function getItem(item) {
  const newItem = templateEl.content.cloneNode(true);
  const cardTitle = newItem.querySelector(".elements__title");
  const cardLink = newItem.querySelector(".elements__image");
  cardTitle.textContent = item.name;
  cardLink.src = item.link;

  return newItem;
}

render();

// Добавление лайка
const btnLike = document.querySelector(".elements__btn-like");
const btnDelete = document.querySelector(".elements__btn-delete");

btnLike.addEventListener("click", function (evt) {
  evt.target.classList.toggle("elements__btn-like_active");
});

// Добавление новой карточки
// function formSubmitHandler(evt) {
//   evt.preventDefault();
//   (cardTitle.textContent = placeNameInput.value),
//     (cardLink.src = placeLinkInput.value),
//     closePopup();
// }

// formElement.addEventListener("submit", formSubmitHandler);
const createCard = document.querySelector(".form__button-add");

function handlerCardAdd(evt) {
  evt.preventDefault();
  // const nameCard = placeNameInput.value;
  // const linkCard = placeLinkInput.value;
  const card = getItem({ name: nameCard }, { link: linkCard });
  cardList.prepend(card);
  closePopup();
}

createCard.addEventListener("submit", handlerCardAdd);
