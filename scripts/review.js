const reviewsDisplay=document.getElementById("reviews");

let numReviews=Number(window.localStorage.getItem("numReviews-ls"))||0;


reviewsDisplay.textContent=`Number of reviews: ${numReviews}`;

if (numReviews!==0){
  reviewsDisplay.textContent=`Number of reviews: ${numReviews}`;
}
else{
reviewsDisplay.textContent="First review";
}
