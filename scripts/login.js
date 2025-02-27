const joinBtn = document.querySelector("#joinBtn");
const password = document.querySelector("#password");
const eye = document.querySelector(".fas");
joinBtn.addEventListener("click", () => {
  location.href = "join.html";
});

eye.addEventListener("click", () => {
  if (eye.classList.contains("active")) {
    eye.classList.remove("active");
    eye.classList.remove("fa-eye");
    eye.classList.add("fa-eye-slash");
    password.type = "text";
  } else {
    eye.classList.add("active");
    eye.classList.add("fa-eye");
    eye.classList.remove("fa-eye-slash");
    password.type = "password";
  }
});
