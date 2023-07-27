const ratings = document.querySelectorAll(".rating");
const submitBtn = document.querySelector(".btn");
let userRating;

function removeClickedButton() {
  ratings.forEach((rating) => rating.classList.remove("clicked"));
}

function displayThankYouCard() {
  if (!userRating) {
    alert("please choose a rating!!");
    return;
  }
  const ratingCard = document.querySelector(".rating_card");
  const thankYouCard = document.querySelector(".thankyou_card");
  const userScore = document.querySelector(".user_score");

  ratingCard.classList.add("hide");
  thankYouCard.classList.remove("hide");
  userScore.textContent = `You selected ${userRating} out of 5!`;
}

ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
    removeClickedButton();
    rating.classList.add("clicked");
    userRating = rating.id;
  });
});

submitBtn.addEventListener("click", displayThankYouCard);
