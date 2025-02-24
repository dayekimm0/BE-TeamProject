document.addEventListener("DOMContentLoaded", function () {
  // 모달 요소들
  const modal = document.getElementById("couponModal");
  const modalTitle = modal.querySelector(".modal-title");
  const modalCheck = modal.querySelector(".modal-check");
  const confirmBtn = modal.querySelector(".confirm-btn");
  const homepageBtn = modal.querySelector(".homepage-btn");

  // 쿠폰 요소들
  const coupons = document.querySelectorAll(".couponCommon");
  const allCouponBtn = document.querySelector(".buttons button");

  // 쿠폰 종류별 정보 매핑
  const couponInfo = {
    couponGreen: {
      type: "푸드",
      color: "food",
      url: "/food.html",
    },
    couponPink: {
      type: "뷰티",
      color: "beauty",
      url: "/beauty.html",
    },
    couponSky: {
      type: "패션",
      color: "fashion",
      url: "./fashion.html",
    },
    couponPurple: {
      type: "원데이",
      color: "lifestyle",
      url: "/lifestyle.html",
    },
  };

  // 개별 쿠폰 클릭 이벤트
  coupons.forEach((coupon) => {
    coupon.addEventListener("click", () => {
      let couponClass = Array.from(coupon.classList).find(
        (cls) => cls !== "couponCommon"
      );
      let info = couponInfo[couponClass];

      if (info) {
        modalCheck.className = `modal-check ${info.color}`;
        showModal(`${info.type} 쿠폰이 발급 되었습니다.`);

        // 모달 확인 버튼 클릭 시 해당 카테고리로 이동
        confirmBtn.onclick = () => {
          window.location.href = info.url;
        };
      }
    });
  });

  // 전체 발급 버튼 클릭 이벤트
  allCouponBtn.addEventListener("click", () => {
    modalCheck.className = "modal-check"; // 기본 색상으로 리셋
    showModal("쿠폰이 전체 발급 되었습니다.");

    // 전체 발급 시에는 메인 페이지로 이동
    confirmBtn.onclick = () => {
      closeModal();
    };
  });

  // 모달 표시 함수
  function showModal(message) {
    modalTitle.textContent = message;
    modal.classList.add("active");
  }

  // 모달 닫기 함수
  function closeModal() {
    modal.classList.remove("active");
  }

  // 홈페이지 구경하기 버튼 클릭 시
  homepageBtn.addEventListener("click", () => {
    window.location.href = "/"; // 메인 페이지로 이동
  });

  // 모달 외부 클릭 시 닫기
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
});
