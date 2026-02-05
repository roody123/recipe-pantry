const searchField = document.querySelector(".search");
const dishes = document.querySelectorAll(".dish");

searchField.addEventListener("keyup", (e) => {
  const word = e.target.value.toLowerCase();

  dishes.forEach((item) => {
    const name = item.querySelector('h2').textContent.toLowerCase().includes(word)
      ? (item.style.display = "flex")
      : (item.style.display = "none");
  });
});