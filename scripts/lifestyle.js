const tabBtns = document.querySelectorAll("li >button");
const tabConts = document.querySelectorAll(".tabContainer > div");

console.log(tabBtns, tabConts);
tabBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    tabBtns.forEach((otherBtn) => {
      otherBtn.classList.remove("active");
    });
    tabConts.forEach((otherCont) => {
      otherCont.classList.remove("active");
    });
    tabBtns[index].classList.add("active");
    tabConts[index].classList.add("active");
  });
});
