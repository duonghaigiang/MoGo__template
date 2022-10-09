function debounceFnn(func, wait, immediate) {
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
  debounceFnn(function (e) {
    const heightScreenn = document.documentElement.clientHeight;
    const scrollHeightt = window.pageYOffset;
    let getOffSetHeight = document.querySelector(
      ".content__develop__container"
    );
    const getContainerImg = document.querySelector(
      ".content__develop__container-img"
    );
    const haftScreen = heightScreenn / 2;
    if (scrollHeightt > getOffSetHeight.offsetTop - haftScreen) {
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
