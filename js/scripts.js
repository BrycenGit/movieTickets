//function

function Receipt(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
  this.cost = this.calculateCost();
}
Receipt.prototype.calculateCost = function () {
  let baseCost = 10;
  if (this.movie === "Fast & Furious 20") {
    baseCost += 2;
  }
  if (this.time === "3pm") {
    baseCost -= 1;
  }
  if (this.age === "senior") {
    baseCost *= 0.5;
  } else if (this.age === "junior") {
    baseCost *= 0.75;
  }
  return baseCost;
};
//let test = new Receipt("somethingelse", "3pm", "senior"); <== way to test
//alert(test.cost);

function showReceipt(newReceipt) {
  //<== pass newReceipt into the ()
  $(".receipt").show();
  $("#movie-name").text(newReceipt.movie);
  $("#movie-time").text(newReceipt.time);
  $("#movie-cost").text(newReceipt.cost);
}

$(document).ready(function () {
  $("#movie-select").submit(function (event) {
    event.preventDefault();
    const inputtedMovie = $("#movie").val();
    let inputtedTime = $("#time").val();
    let inputtedAge = $("#age").val();
    // console.log(inputtedAge, inputtedMovie, inputtedTime);
    let newReceipt = new Receipt(inputtedMovie, inputtedTime, inputtedAge);
    //console.log(newReceipt);
    showReceipt(newReceipt);
    //console.log(newReceipt);
  });
});
