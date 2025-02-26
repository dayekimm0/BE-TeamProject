document.addEventListener("DOMContentLoaded", function () {
  // 모달 요소들 - '.modal'에서 '.'를 제거하고 ID로 접근
  const modal = document.getElementById("couponModal");
  const modalTitle = modal.querySelector(".modalTitle");
  const modalCheck = modal.querySelector(".modalCheck");
  const confirmBtn = modal.querySelector(".confirmBtn");
  const homepageBtn = modal.querySelector(".homepageBtn");

  // 쿠폰 요소들
  const coupons = document.querySelectorAll(".couponCommon");
  const allCouponBtn = document.querySelector(".buttons button");

  // 각 쿠폰별 데이터 설정
  const couponData = {
    FOOD: {
      title: "푸드 쿠폰이 발급 되었습니다.",
      buttonText: "푸드로 이동",
      url: "food.html",
      color: "#cae570",
    },
    BEAUTY: {
      title: "뷰티 쿠폰이 발급 되었습니다.",
      buttonText: "뷰티로 이동",
      url: "beauty.html",
      color: "#ffc6c7",
    },
    FASHION: {
      title: "패션 쿠폰이 발급 되었습니다.",
      buttonText: "패션으로 이동",
      url: "fashion.html",
      color: "#b4e3fc",
    },
    ONEDAY: {
      title: "원데이 쿠폰이 발급 되었습니다.",
      buttonText: "원데이로 이동",
      url: "lifestyle.html",
      color: "#c198f9",
    },
  };

  // 쿠폰 클릭 이벤트
  // coupons.forEach((coupon) => {
  //   coupon.addEventListener("click", function () {
  //     // 쿠폰 유형 확인 (텍스트에서 추출)
  //     const couponText = this.querySelector(".modalTitle").textContent;
  //     const couponType = couponText.split(" ")[0];

  //     // 모달 내용 설정
  //     modalCheck.style.color = couponData[couponType].color;
  //     modalTitle.innerHTML = `<p>${couponData[couponType].title}</p>`;
  //     homepageBtn.textContent = couponData[couponType].buttonText;

  //     // 확인 버튼 클릭 시 동작 설정
  //     confirmBtn.onclick = () => {
  //       closeModal();
  //     };

  //     // 홈페이지 버튼 클릭 시 동작 설정
  //     homepageBtn.onclick = () => {
  //       window.location.href = couponData[couponType].url;
  //     };

  //     // 모달 표시
  //     showModal(couponData[couponType].title);
  //   });
  // });
  coupons.forEach((coupon) => {
    coupon.addEventListener("click", function () {
      // 쿠폰 유형 확인 (클래스에서 추출)
      let couponType = "";
      if (this.classList.contains("couponGreen")) {
        couponType = "FOOD";
      } else if (this.classList.contains("couponPink")) {
        couponType = "BEAUTY";
      } else if (this.classList.contains("couponSky")) {
        couponType = "FASHION";
      } else if (this.classList.contains("couponPurple")) {
        couponType = "ONEDAY";
      }

      // 모달 내용 설정
      modalCheck.querySelector("span").style.color = couponData[couponType].color;
      modalTitle.innerHTML = `<p>${couponData[couponType].title}</p>`;
      homepageBtn.textContent = couponData[couponType].buttonText;
      homepageBtn.style.color = couponData[couponType].buttonText;

      // 확인 버튼 클릭 시 동작 설정
      confirmBtn.onclick = () => {
        closeModal();
      };

      // 홈페이지 버튼 클릭 시 동작 설정
      homepageBtn.onclick = () => {
        window.location.href = couponData[couponType].url;
      };

      // 모달 표시
      showModal();
    });
  });

  // 전체 발급 버튼 클릭 이벤트
  allCouponBtn.addEventListener("click", () => {
    modalCheck.style.color = ""; // 기본 색상으로 리셋
    modalTitle.innerHTML = `<p>쿠폰이 전체 발급 되었습니다.</p>`;
    homepageBtn.textContent = "메인으로 이동";

    // 확인 버튼 클릭 시 동작 설정
    confirmBtn.onclick = () => {
      closeModal();
    };

    // 홈페이지 버튼 클릭 시 동작 설정
    homepageBtn.onclick = () => {
      window.location.href = "/";
    };

    // 모달 표시
    showModal("쿠폰이 전체 발급 되었습니다.");
  });

  // 모달 표시 함수
  function showModal(message) {
    modal.style.display = "block";
  }

  // 모달 닫기 함수
  function closeModal() {
    modal.style.display = "none";
  }

  // 모달 외부 클릭 시 닫기
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
});
