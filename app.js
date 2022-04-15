const list = document.getElementById("rate"),
  submitBtn = document.querySelector(".submit-btn"),
  selectedRating = document.getElementById("selected-rating"),
  thankYouState = document.querySelector(".thank-you-state");

submitBtn.addEventListener("click", handleSubmit);
list.addEventListener("click", handleClick);
// submitBtn.classList.
let ratingValue;
function handleClick(e) {
  const lists = [...e.currentTarget.children];
  lists.forEach((list) => {
    list.firstElementChild.classList.remove("selected-btn");
  });
  if (e.target.classList.contains("card__list-btn")) {
    e.target.classList.add("selected-btn");
    ratingValue = e.target.textContent;
  }
}
function handleSubmit() {
  if (ratingValue > 0) {
    selectedRating.textContent = ratingValue;
    thankYouState.classList.add("show");
  }
}
