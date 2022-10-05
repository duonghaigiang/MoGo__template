function debounceFn(func, wait, immediate) {
  let timeout;
  return function () {
    let context = this;
    args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

window.addEventListener(
  "scroll",
  debounceFn(function (e) {
    const process = document.querySelector(".header__process");
    const scrollHeight = window.pageYOffset;
    const heightPage = document.documentElement.scrollHeight;
    const heightScreen = document.documentElement.clientHeight;
    let getOffSetHeight = document.querySelector(
      ".content__develop__container"
    );
    const getContainerImg = document.querySelector(
      ".content__develop__container-img"
    );
    const haftScreen = heightScreen / 2;
    const heightRemain = heightPage - heightScreen;
    const width = (scrollHeight / heightRemain) * 100;
    process.style.width = `${width}%`;
    if (scrollHeight > getOffSetHeight.offsetTop - haftScreen) {
      getContainerImg.classList.add("is-show");
      showImg(getContainerImg);
    } else {
      getContainerImg.classList.remove("is-show");
    }
  }, 0)
);
function showImg(item) {
  item.classList.add("showImg");
}
