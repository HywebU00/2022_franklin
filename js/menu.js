const menu = document.querySelectorAll(".nav-link.dropdown-toggle");
function OpenMenu(item) {
  const width = window.innerWidth;
  function openM() {
    item.nextElementSibling.classList.add("show");
    item.classList.add("show");
    item.addEventListener("click", herfPage);
    item.removeAttribute("data-bs-toggle", "dropdown");
  }
  function closeM() {
    item.nextElementSibling.classList.remove("show");
    item.classList.remove("show");
    //item.removeEventListener('click', herfPage)
  }
  item.parentElement.addEventListener("mouseover", openM);
  item.parentElement.addEventListener("mouseout", closeM);
  item.addEventListener("click", herfPage);
  if (width < 992) {
    item.parentElement.removeEventListener("mouseover", openM);
    item.parentElement.removeEventListener("mouseout", closeM);
    item.setAttribute("data-bs-toggle", "dropdown");
    item.removeEventListener("click", herfPage);
  }
}
const herfPage = function (e) {
  const link = e.target.dataset.link;
  window.location = link;
};
const reportWindowSize = function () {
  menu.forEach((item) => {
    OpenMenu(item);
  });
};
reportWindowSize();
window.addEventListener("resize", function () {
  window.location.reload();
});
