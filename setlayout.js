const Work = document.querySelectorAll(".content__work-image");
const getContentWork = [...Work];
getContentWork.forEach(function (item) {
  item.addEventListener("mouseover", function (e) {
    // item.style.display = "block";
  });
});
