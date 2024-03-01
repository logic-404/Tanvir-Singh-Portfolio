let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  navbar.classList.toggle("open-menu");
  menu.classList.toggle("move");
};

window.onscroll = () => {
  navbar.classList.remove("open-menu");
  menu.classList.remove("move");
};

// Reviews Swiper
var swiper = new Swiper(".reviews-content", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Email JS
function validate() {
  let name = document.querySelector(".name");
  let email = document.querySelector(".email");
  let message = document.querySelector(".message");
  let sendBtn = document.querySelector(".send-btn");

  sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (name.value === "" || email.value === "" || message.value === "") {
      emptyerror();
    } else {
      sendmail(name.value, email.value, message.value);
      success();
    }
  });
}
validate();

function sendmail(name, email, message) {
  emailjs.send("service_mtygs5j", "template_aufbehe", {
    from_name: name,
    to_name: "Tanvir Singh",
    message: message,
    reply_to: email,
  });
}

function emptyerror() {
  swal({
    title: "Oh No...",
    text: "Fields cannot be empty!",
    icon: "error",
  });
}

function success() {
  swal({
    title: "Email Sent",
    text: "We try to reply in 24 hours",
    icon: "success",
  });
}

// Header Background Change on Scroll
let header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("header-active", window.scrollY > 0);
});

// Scroll Top
let scrollTop = document.querySelector(".scroll-top");
window.addEventListener("scroll", () => {
  scrollTop.classList.toggle("scroll-active", window.scrollY >= 400);
});
