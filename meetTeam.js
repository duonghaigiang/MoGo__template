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
