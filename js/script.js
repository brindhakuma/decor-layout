    const menuitems = document.querySelectorAll(".navigate ul li a");

// When clicked → save the index
menuitems.forEach((item, index) => {
  item.addEventListener("click", () => {
    localStorage.setItem("activeMenu", index);
  });
});

// When the page loads → restore underline
const activeIndex = localStorage.getItem("activeMenu");

if (activeIndex !== null) {
  menuitems.forEach(i => i.classList.remove("activelink"));
  menuitems[activeIndex].classList.add("activelink");
}
