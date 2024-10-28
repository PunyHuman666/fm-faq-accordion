const plusBtns = document.querySelectorAll(".plus-minus");
const answers = document.querySelectorAll(".hidden");

const showHideAnswer = function (i) {
  answers[i].style.display === "block"
    ? (answers[i].style.display = "none")
    : (answers[i].style.display = "block");
};

const changeIcon = function (btn) {
  if (btn.src.includes("plus")) {
    btn.src = "./assets/images/icon-minus.svg";
  } else {
    btn.src = "./assets/images/icon-plus.svg";
  }
};

plusBtns.forEach((btn, i) => {
  btn.addEventListener("click", function () {
    showHideAnswer(i);
    changeIcon(btn);
  });
});
