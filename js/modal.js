document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modalWindow");
  const openButton = document.getElementById("openMod");

  let focusable = modal.querySelectorAll(
    'button, [href], [tabindex]:not([tabindex="-1"])'
  );
  let firstFocusable = focusable[0];
  let lastFocusable = focusable[focusable.length - 1];
  console.log(focusable);

  // pour ouvrir la fenêtre modale
  openButton.addEventListener("click", (event) => {
    event.preventDefault();
    modal.style.display = "flex";
  });

  // pour fermer la fenêtre modale
  firstFocusable.addEventListener("click", (event) => {
    event.preventDefault();
    modal.style.display = "none";
    openButton.focus();
  });

// gerer le focus
modal.addEventListener('keydown', ({key, shiftKey}) => {
  if (key === "Tab") {
    if (shiftKey) {
      if (document.activeElement === firstFocusable) {
        lastFocusable.focus();
        e.preventDefault()
      }
    } else {
      if (document.activeElement === lastFocusable) {
        firstFocusable.focus();
        e.preventDefault();
      }
    }
  }

  if (key === "Escape") {
    modal.style.display = "none";
    openButton.focus();
  }
})
});