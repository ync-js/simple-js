const minusBtn = document.getElementById("minus")
const plusBtn = document.getElementById("plus")
const countDisplay = document.getElementById("countDisplay")
let count = 0

minusBtn.addEventListener("click", () => {
  count--;
  displayCount()
  console.log({count})
})
  
plusBtn.addEventListener("click", () => {
  count++;
  displayCount()
})

function displayCount() {
  countDisplay.innerText = count
}