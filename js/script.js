var map = document.querySelector(".contact-map");
var popupMap = document.querySelector(".modal-map");
var closeMap = popupMap.querySelector(".modal-close");

var feedback = document.querySelector(".write-us");
var popupFb = document.querySelector(".modal-contact-form");
var contactForm = popupFb.querySelector(".contact-form");
var userEmail = contactForm.querySelector("#email");
var userName = contactForm.querySelector("#name");
var userMessage = contactForm.querySelector("#text");
var isStorageSupport = true;
var storageEmail = "";
var storageName = "";
var closeFb = popupFb.querySelector(".modal-close");

var promoSlider = document.querySelector(".promo-slider");
var promoSlide1 = document.querySelector(".promo-slide-1");
var promoSlide2 = document.querySelector(".promo-slide-2");
var promoSlide3 = document.querySelector(".promo-slide-3");
var promoSlideBtn1 = promoSlider.querySelector(".slide-btn-1");
var promoSlideBtn2 = promoSlider.querySelector(".slide-btn-2");
var promoSlideBtn3 = promoSlider.querySelector(".slide-btn-3");

var servicesSlider = document.querySelector(".services-slider");
var serviceSlide1 = servicesSlider.querySelector(".delivery-slide");
var serviceSlide2 = servicesSlider.querySelector(".warranty-slide");
var serviceSlide3 = servicesSlider.querySelector(".credit-slide");
var serviceSlideBtn1 = servicesSlider.querySelector(".services-delivery-btn");
var serviceSlideBtn2 = servicesSlider.querySelector(".services-warranty-btn");
var serviceSlideBtn3 = servicesSlider.querySelector(".services-credit-btn");


try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
};

// Modal Map
map.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.add("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupFb.classList.contains("modal-show")) {
      popupFb.classList.remove("modal-show");
      popupFb.classList.remove("modal-form-error");
    }
    if (popupMap.classList.contains("modal-show")) {
      popupMap.classList.remove("modal-show");
    }
   }
});

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.remove("modal-show");
});

// Modal Contact Form
feedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupFb.classList.add("modal-show");
  popupFb.classList.add("animation-modal-form");
    if (storageName) {
      userName.value = storageName;
      userEmail.focus();
    } else {
      userName.focus();
    }
    if (storageEmail) {
      userEmail.value = storageEmail;
      if (storageName) {
        userMessage.focus();
      } else {
      userName.focus();
      }
    }
});

contactForm.addEventListener("submit", function (evt) {
  if (!userEmail.value || !userName.value || !userMessage.value) {
    evt.preventDefault();
    popupFb.classList.remove("animation-modal-form");
    popupFb.classList.remove("modal-form-error");
    popupFb.offsetWidth = popupFb.offsetWidth;
    popupFb.classList.add("modal-form-error");
  } else {
    localStorage.setItem("name", userName.value);
    localStorage.setItem("email", userEmail.value);
  }
});

closeFb.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupFb.classList.remove("modal-show");
  popupFb.classList.remove("modal-form-error");
});

// Promo Slider
promoSlideBtn1.addEventListener("click", function (evt) {
  evt.preventDefault();
  promoSlide1.classList.remove("pop-up");
  promoSlide2.classList.add("pop-up");
  promoSlide3.classList.add("pop-up");
  promoSlideBtn1.classList.add("slide-btn-chacked");
  promoSlideBtn2.classList.remove("slide-btn-chacked");
  promoSlideBtn3.classList.remove("slide-btn-chacked");
});

promoSlideBtn2.addEventListener("click", function (evt) {
  evt.preventDefault();
  promoSlide1.classList.add("pop-up");
  promoSlide2.classList.remove("pop-up");
  promoSlide3.classList.add("pop-up");
  promoSlideBtn1.classList.remove("slide-btn-chacked");
  promoSlideBtn2.classList.add("slide-btn-chacked");
  promoSlideBtn3.classList.remove("slide-btn-chacked");
});

promoSlideBtn3.addEventListener("click", function (evt) {
  evt.preventDefault();
  promoSlide1.classList.add("pop-up");
  promoSlide2.classList.add("pop-up");
  promoSlide3.classList.remove("pop-up");
  promoSlideBtn1.classList.remove("slide-btn-chacked");
  promoSlideBtn2.classList.remove("slide-btn-chacked");
  promoSlideBtn3.classList.add("slide-btn-chacked");
});

// Services Slider
serviceSlideBtn1.addEventListener("click", function (evt) {
  evt.preventDefault();
  serviceSlide1.classList.remove("pop-up");
  serviceSlide2.classList.add("pop-up");
  serviceSlide3.classList.add("pop-up");
  serviceSlideBtn1.classList.add("service-btn-chacked");
  serviceSlideBtn2.classList.remove("service-btn-chacked");
  serviceSlideBtn3.classList.remove("service-btn-chacked");
});

serviceSlideBtn2.addEventListener("click", function (evt) {
  evt.preventDefault();
  serviceSlide1.classList.add("pop-up");
  serviceSlide2.classList.remove("pop-up");
  serviceSlide3.classList.add("pop-up");
  serviceSlideBtn1.classList.remove("service-btn-chacked");
  serviceSlideBtn2.classList.add("service-btn-chacked");
  serviceSlideBtn3.classList.remove("service-btn-chacked");
});

serviceSlideBtn3.addEventListener("click", function (evt) {
  evt.preventDefault();
  serviceSlide1.classList.add("pop-up");
  serviceSlide2.classList.add("pop-up");
  serviceSlide3.classList.remove("pop-up");
  serviceSlideBtn1.classList.remove("service-btn-chacked");
  serviceSlideBtn2.classList.remove("service-btn-chacked");
  serviceSlideBtn3.classList.add("service-btn-chacked");
});

serviceSlideBtn1.addEventListener("focus", function (evt) {
  evt.preventDefault();
  serviceSlide1.classList.remove("pop-up");
  serviceSlide2.classList.add("pop-up");
  serviceSlide3.classList.add("pop-up");
  serviceSlideBtn1.classList.add("service-btn-chacked");
  serviceSlideBtn2.classList.remove("service-btn-chacked");
  serviceSlideBtn3.classList.remove("service-btn-chacked");
});

serviceSlideBtn2.addEventListener("focus", function (evt) {
  evt.preventDefault();
  serviceSlide1.classList.add("pop-up");
  serviceSlide2.classList.remove("pop-up");
  serviceSlide3.classList.add("pop-up");
  serviceSlideBtn1.classList.remove("service-btn-chacked");
  serviceSlideBtn2.classList.add("service-btn-chacked");
  serviceSlideBtn3.classList.remove("service-btn-chacked");
});

serviceSlideBtn3.addEventListener("focus", function (evt) {
  evt.preventDefault();
  serviceSlide1.classList.add("pop-up");
  serviceSlide2.classList.add("pop-up");
  serviceSlide3.classList.remove("pop-up");
  serviceSlideBtn1.classList.remove("service-btn-chacked");
  serviceSlideBtn2.classList.remove("service-btn-chacked");
  serviceSlideBtn3.classList.add("service-btn-chacked");
});