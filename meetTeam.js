const arrayMeet = [...document.querySelectorAll(".meetTeam")];
const arraySrc = [...document.querySelectorAll(".meetTeam img")];
arrayMeet.forEach(function (item) {
  let index = 0;

  item.addEventListener("click", function (event) {
    const src = event.currentTarget.firstElementChild.getAttribute("src");
    getimg.setAttribute("src", src);
    getModal.classList.add("active");
    getModal.addEventListener("click", function (event) {
      if (
        event.target.matches(".modal__overlay") &&
        !event.target.matches(".modal i")
      ) {
        getModal.classList.remove("active");
      } else if (event.target.matches(".light-box__next")) {
        tranferImg();

        index = arraySrc.findIndex(function (item) {
          const getImgLightSrc = getimg.getAttribute("src");
          return item.getAttribute("src") === getImgLightSrc;
        });
        index++;
        if (index === arraySrc.length) index = 0;
        const nextImg = arraySrc[index].getAttribute("src");
        getimg.setAttribute("src", nextImg);
      } else if (event.target.matches(".light-box__back")) {
        tranferImg1();

        index = arraySrc.findIndex(function (item) {
          const getImgLight = getimg.getAttribute("src");
          return item.getAttribute("src") === getImgLight;
        });
        index--;
        if (index < 0) index = arraySrc.length - 1;
        const backImg = arraySrc[index].getAttribute("src");
        getimg.setAttribute("src", backImg);
      }
    });
  });
});
const nowDate = new Date();
const olddDate = new Date("Mon Aug 01 2022 01:49:40 GMT+0700 (Indochina Time)");
const showDate = document.querySelector(".header__text-more");
const getNowDate = nowDate.getTime();
const getOldDate = olddDate.getTime();
let handelDate = (getNowDate - getOldDate) / 1000;
let getYear = parseInt(handelDate / (60 * 60 * 24 * 30 * 12));
getYear = `0${getYear}`.slice(-2);
handelDate = handelDate % (60 * 60 * 24 * 30 * 12);
let getMonth = parseInt(handelDate / (60 * 60 * 24 * 30));
getMonth = `0${getMonth}`.slice(-2);
handelDate = handelDate % (60 * 60 * 24 * 30);
let getDay = parseInt(handelDate / (60 * 60 * 24));
getDay = `0${getDay}`.slice(-2);
function addDate() {
  const temp = `<div class="header__date">
  <div class="header__dateYear"><span>${getYear}</span> Years</div>
  <div class="header__dateMonth"><span>${getMonth}</span> Months</div>
  <div class="header__dateDate"><span>${getDay}</span> Days</div>
</div>`;
  showDate.insertAdjacentHTML("beforeend", temp);
}
showDate.addEventListener("click", function (e) {
  e.preventDefault();
  const containerDate = document.querySelector(".header__date");
  if (!containerDate) {
    addDate();
  } else {
    e.target.nextElementSibling.parentNode.removeChild(
      e.target.nextElementSibling
    );
  }
});
