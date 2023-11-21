// Add click event listeners to the buttons
const buttons = document.querySelectorAll(".tab-button");
// document.getElementById("bookmarking").click();
buttons.forEach(function (button) {
  //   button.style.display = none;
  button.addEventListener("click", function () {
    let feature = button.getAttribute("data-feature");
    openFeature(feature);
  });
});

function openFeature(feature) {
  let i, tabContent;
  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  let buttons = document.querySelectorAll(".tab-button");
  for (i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }
  let activeButton = document.getElementById(feature);
  activeButton.style.display = "flex";
  activeButton.classList.add("active");
}
