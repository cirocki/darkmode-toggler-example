window.addEventListener("DOMContentLoaded", (e) => {
  const toggleDarkMode = document.querySelector(".btn-toggle-dark-mode");
  let prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  let darkModeLocal = localStorage.getItem("darkMode");

  // DISABLE DARK MODE FUNCTION
  const disableDarkMode = () => {
    localStorage.setItem("darkMode", "disabled");
    document.body.classList.remove("dark-mode");
  };

  // ENABLE DARK MODE FUNCTION
  const enableDarkMode = () => {
    localStorage.setItem("darkMode", "enabled");
    document.body.classList.add("dark-mode");
  };

  // IF DARKMODE IS NOT SAVED IN LOCALSTORAGE TRY BROWSER PREFERRED MODE
  if (darkModeLocal === null) {
    if (prefersDarkScheme.matches) {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
    // IF DARKOMODE IS SET IN LOCALSTORAGE
  } else {
    if (localStorage.darkMode === "enabled") {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  }

  // TOGGLE DARKMODE ON BUTTON CLICK
  toggleDarkMode.addEventListener("click", () => {
    if (localStorage.darkMode === "enabled") {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  });
});
