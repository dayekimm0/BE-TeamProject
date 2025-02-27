// 헤더
const header = document.querySelector("header");
const headerInner = `
  <h1>
        <a href="#" title="Home">
          <img src="./images/common/logo_white.png" alt="Home" />
        </a>
      </h1>
      <button id="toggleBtn">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav id="gnb">
        <ul>
          <li>
            <a href="#" title="Food">Food</a>
          </li>
          <li>
            <a href="#" title="Beauty">Beauty</a>
          </li>
          <li>
            <a href="#" title="Fashion">Fashion</a>
          </li>
          <li>
            <a href="#" title="Lifestyle">Lifestyle</a>
          </li>
          <li>
            <a href="#" title="Events">Events</a>
          </li>
          <li>
            <a href="#" title="Sign Up" id="Sign">Login</a>
          </li>
        </ul>
      </nav>
`;
header.innerHTML = headerInner;
//푸터
const footer = document.querySelector("footer");
const footerInner = `
      <div id="footerInner">
        <div id="footerTop">
          <div id="footerLogo">
            <img src="./images/common/logo_white.png" alt="BE:" />
          </div>
          <nav id="fnb">
            <ul>
              <li>
                <a href="#" title="Food">Food</a>
              </li>
              <li>
                <a href="#" title="Beauty">Beauty</a>
              </li>
              <li>
                <a href="#" title="Fashion">Fashion</a>
              </li>
              <li>
                <a href="#" title="Lifestyle">Lifestyle</a>
              </li>
              <li>
                <a href="#" title="Events">Events</a>
              </li>
              <li>
                <a href="#" title="Sign Up" id="Sign">Login</a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="footerBottom">
          <address>
            <ul>
              <li>CEO : 김다예</li>
              <li>서울 서초구 서초대로77길 41 대동2빌딩 9층</li>
              <li>사업자 등록번호 : 123-45-67890</li>
              <li class="flex-basis"></li>
              <li>
                <a href="#" title="개인정보처리방침">개인정보처리방침</a>
              </li>
              <li>
                <a href="#" title="이용약관">이용약관</a>
              </li>
              <li>
                <a href="#" title="회사소개">회사소개</a>
              </li>
            </ul>
          </address>
          <p>COPYRIGHT BE: ALL RIGHTS RESERVED.</p>
        </div>
      </div>
`;
footer.innerHTML = footerInner;
// 스크롤 이벤트

let prevscroll = 0;
window.addEventListener("scroll", function () {
  let scrollTop = this.scrollY;
  if (scrollTop > prevscroll) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
  prevscroll = scrollTop;
});

// 메뉴 이벤트
const toggleBtn = document.querySelector("#toggleBtn");
toggleBtn.addEventListener("click", function () {
  this.classList.toggle("active");
});

// 메뉴 리사이즈 이벤트
window.addEventListener("resize", () => {
  let headerLogo = document.querySelector("header > h1 > a > img");
  if (window.innerWidth > 1024) {
    header.classList.remove("active");
    toggleBtn.classList.remove("active");
    headerLogo.src = "./images/common/logo_white.png";
  } else {
    headerLogo.src = "./images/common/logo_black.png";
  }
});

// lenis 라이브러리
const lenis = new Lenis();

lenis.on("scroll", (e) => {});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
