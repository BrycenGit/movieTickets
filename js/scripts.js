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

function

$(document).ready(function() {
  $('#movie-select').submit(function(event) {
    event.preventDefault();
    const inputtedMovie =$("select#movie").val();
    const inputtedTime =$("select#time").val();
    const inputtedAge =$("select#age").val();
    let newReceipt = new Receipt(inputtedMovie, inputtedTime, inputtedAge);
  })
})