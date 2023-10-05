let discButton = document.getElementById("useDsicl");
let disclosure = document.getElementById("disclosureWindow");
let isOpen = false;

discButton.addEventListener("click", (e) => {
  if (isOpen) {
    disclosure.style.display = "none";
  } else {
    disclosure.style.display = "block";
  }
  isOpen = !isOpen;
});
