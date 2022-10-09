window.addEventListener("scroll", function (e) {
  const process = document.querySelector(".header__process");
  const scrollHeight = window.pageYOffset;
  const heightPage = document.documentElement.scrollHeight;
  const heightScreen = document.documentElement.clientHeight;
  const heightRemain = heightPage - heightScreen;
  const width = (scrollHeight / heightRemain) * 100;
  process.style.width = `${width}%`;
});
// window.addEventListener(
//   "scroll",
//   debounceFn(function (e) {
//     const heightScreen = document.documentElement.clientHeight;
//     let getOffSetHeight = document.querySelector(
//       ".content__develop__container"
//     );
//     const getContainerImg = document.querySelector(
//       ".content__develop__container-img"
//     );
//     const haftScreen = heightScreen / 2;
//     if (scrollHeight > getOffSetHeight.offsetTop - haftScreen) {
//       getContainerImg.classList.add("is-show");
//       showImg(getContainerImg);
//     } else {
//       getContainerImg.classList.remove("is-show");
//     }
//   }, 0)
// );
// function showImg(item) {
//   item.classList.add("showImg");
// }
