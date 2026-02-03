const unlockBtn = document.getElementById("unlockBtn");
const secretInput = document.getElementById("secretInput");
const overlay = document.getElementById("lock-overlay");
const page = document.getElementById("page-content");

const SECRET = "caspin";

unlockBtn.addEventListener("click", () => {
  if (secretInput.value.trim().toLowerCase() === SECRET.toLowerCase()) {
    page.classList.remove("locked");
    overlay.style.display = "none";
  } else {
    secretInput.value = "";
    secretInput.placeholder = "try again";
  }
});

