const container = document.getElementById("container");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const imageThree = document.querySelector(".image-3");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");
const btnMb = document.querySelector(".btn-maybe");
const h1 = document.querySelector(".h1-text");
const h2 = document.querySelector(".h2-text");
const h3 = document.querySelector(".h3-text");

function getRandomNumber(min, max) {
  // Calculate the random number between min and max (inclusive)
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
}

btnNo.addEventListener("mouseover", (event) => {
  const containerHeight = container.getBoundingClientRect().height;
  const containerWidth = container.getBoundingClientRect().width;
  const btnHeight = btnNo.getBoundingClientRect().height;
  const btnWidth = btnNo.getBoundingClientRect().width;
  const btnTop = btnNo.getBoundingClientRect().top;
  const btnLeft = btnNo.getBoundingClientRect().left;

  let newTop = btnTop;
  let newLeft = btnLeft;
  while (Math.abs(newTop - btnTop) < containerHeight / 3) {
    newTop = getRandomNumber(0, containerHeight - btnHeight);
  }

  while (Math.abs(newLeft - btnLeft) < containerWidth / 3) {
    newLeft = getRandomNumber(0, containerWidth - btnWidth);
  }

  btnNo.style.top = Math.floor(newTop) + "px";
  btnNo.style.left = Math.floor(newLeft) + "px";
});

btnYes.addEventListener("click", (e) => {
  btnYes.classList.add("hide");
  btnMb.classList.add("hide");
  btnNo.classList.add("hide");
  imageOne.classList.add("hide");
  imageTwo.classList.remove("hide");
  h1.classList.add("hide");
  h2.classList.remove("hide");
});

btnMb.addEventListener("click", (e) => {
  btnYes.classList.add("hide");
  btnMb.classList.add("hide");
  btnNo.classList.add("hide");
  imageOne.classList.add("hide");
  imageThree.classList.remove("hide");
  h1.classList.add("hide");
  h3.classList.remove("hide");
});

