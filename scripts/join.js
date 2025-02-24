const finalBtn = document.querySelector("#finalBtn");
const joinCancel = document.querySelector("#joinCancel");
const allCheck = document.querySelector("#joinAll");
const checkBox = document.querySelectorAll(".checkBox");

const checkEvent = (e) => {
  console.log(e.checked);
};
allCheck.addEventListener("change", checkEvent);

joinCancel.addEventListener("click", () => {
  location.href = "login.html";
});

finalBtn.addEventListener("click", () => {
  let isValid = true;
  const email = document.querySelector("#joinId").value;
  const pw01 = document.querySelector("#joinPw");
  const pw02 = document.querySelector("#joinPwCheck");
  const name = document.querySelector("#joinName");
  const vegan = document.querySelector("#vegan").value;
  // 아이디
  if (email === "") {
    errorId.innerHTML = `<i class="fas fa-exclamation"></i>필수항목 입니다.`;
    isValid = false;
  } else if (!email.includes("@") || !email.includes(".com")) {
    errorId.innerHTML = `<i class="fas fa-exclamation"></i>입력된 아이디는 잘못된 형식입니다.`;
    isValid = false;
  } else {
    errorId.innerText = "";
  }

  // 비밀번호
  if (pw01.value === "") {
    document.querySelector(
      "#errorPw01"
    ).innerHTML = `<i class="fas fa-exclamation"></i>필수항목 입니다.`;
    pw01.addEventListener("focus", () => {
      document.querySelector("#errorPw01").innerText = "";
    });
    isValid = false;
  } else {
    document.querySelector("#errorPw01").innerText = "";
  }
  if (pw02.value === "") {
    document.querySelector(
      "#errorPw02"
    ).innerHTML = `<i class="fas fa-exclamation"></i>필수항목 입니다.`;
    isValid = false;
  } else {
    if (pw01.value !== pw02.value) {
      document.querySelector("#errorPw02").innerText =
        "비밀번호가 서로 다릅니다.";
      isValid = false;
    } else {
      document.querySelector(
        "#errorPw02"
      ).innerHTML = `<i class="fas fa-exclamation"></i>비밀번호가 일치합니다.`;
    }
  }

  // 이름
  if (name.value === "") {
    document.querySelector(
      "#errorName"
    ).innerHTML = `<i class="fas fa-exclamation"></i>필수항목 입니다.`;
    isValid = false;
  } else {
    document.querySelector("#errorName").innerText = "";
  }

  // 채식 단계
  if (
    vegan !== "비건" &&
    vegan !== "락토 베지테리언" &&
    vegan !== "오보 베지테리언" &&
    vegan !== "락토 오브 베지테리언" &&
    vegan !== "페스코 베지테리언" &&
    vegan !== "폴로 베지테리언" &&
    vegan !== "플렉시테리언"
  ) {
    document.querySelector(
      "#errorSelect"
    ).innerHTML = `<i class="fas fa-exclamation"></i>필수항목 입니다.`;
    isValid = false;
  } else {
    document.querySelector("#errorSelect").innerText = "";
  }

  if (isValid === true) {
    location.href = "welcome.html";
  }

  // 약관
});
