const getContentOpinion = document.querySelectorAll(".content__opinion__wrap");
const ArrayOpinion = [...getContentOpinion];
const nextOpinion = document.querySelectorAll(".content__opinion-iconNext");
const ArrayNextIcon = [...nextOpinion];
const backOpinion = document.querySelectorAll(".content__opinion-iconBack");
const ArrayBackIcon = [...backOpinion];
function handel() {
  let i = 0;
  ArrayOpinion[i].classList.add("active");
  ArrayOpinion.forEach(function (item) {
    item.addEventListener("click", function (event) {
      if (event.target.matches(".content__opinion-iconNext")) {
        ArrayOpinion[i].classList.remove("active");
        i++;
        if (i === ArrayOpinion.length) {
          ArrayOpinion[ArrayOpinion.length - 1].classList.remove("active");
          i = 0;
          ArrayOpinion[i].classList.add("active");
        } else {
          ArrayOpinion[i].classList.add("active");
        }
      } else if (event.target.matches(".content__opinion-iconBack")) {
        ArrayOpinion[i].classList.remove("active");
        i = i - 1;
        if (i < 0) {
          i = ArrayOpinion.length - 1;
          ArrayOpinion[i].classList.add("active");
          console.log(i);
        } else {
          ArrayOpinion[i].classList.add("active");
        }
      }
    });
  });
}
handel();
