const counter = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");
const resetBtn = document.getElementById("resetBtn");
const resetToValue = document.getElementById("resetToValue");
const resetInput = document.getElementById("input_field");
let count = 0;

function updateCounter() {
  counter.textContent = count;
}

incrementBtn.addEventListener("click", function () {
  count++;
  updateCounter();
  console.log("Counter:", count);
});

decrementBtn.addEventListener("click", function () {
  count--;
  updateCounter();
  console.log("Counter:", count);
});

resetBtn.addEventListener("click", function () {
  count = 0;
  updateCounter();
  console.log("Counter reset to:", count);
});
resetToValue.addEventListener("click", function () {
  count = parseInt(resetInput.value);
  if (isNaN(count)) {
    //if not a number reseet it to 0
    count = 0;
  }
  updateCounter();
});
