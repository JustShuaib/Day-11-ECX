const list = document.getElementById("rate");
const submitBtn = document.querySelector(".submit-btn");
const selectedRating = document.getElementById("selected-rating");
const homeBtn = document.querySelector(".home");
submitBtn.addEventListener("click", handleSubmit);
const thankYouState = document.querySelector(".thank-you-state");
const selectedContainer = document.querySelector(".selected-container");
list.addEventListener("click", handleClick);
homeBtn.addEventListener("click", backToHome);

let ratingValue;
function handleClick(e) {
  const lists = [...e.currentTarget.children];
  lists.forEach((list) => {
    list.firstElementChild.classList.remove("selected-btn");
  });
  if (e.target.tagName === "BUTTON") {
    e.target.classList.add("selected-btn");
    ratingValue = e.target.textContent;
  }
}
function handleSubmit(e) {
  if (ratingValue > 0) {
    selectedRating.textContent = ratingValue;
    thankYouState.classList.add("show");
  }
}
function backToHome() {
  [...list.children].forEach((list) => {
    list.firstElementChild.classList.remove("selected-btn");
  });
  ratingValue = 0;
  thankYouState.classList.remove("show");
}
