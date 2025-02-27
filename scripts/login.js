const joinBtn = document.querySelector("#joinBtn");
const id = document.querySelector("#email");
const password = document.querySelector("#password");
const eye = document.querySelector(".fas");
const loginBtn = document.querySelector("#loginBtn");
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

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("gd");
  if (id.value !== "" && password.value !== "") {
    location.href = "index.html";
  }
});

joinBtn.addEventListener("click", () => {
  location.href = "join.html";
});
