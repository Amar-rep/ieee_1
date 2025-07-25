const counter = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");
const resetBtn = document.getElementById("resetBtn");

let count = 0;

function updateCounter() {
  counter.textContent = count;
}

// Event listeners
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
