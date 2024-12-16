document.addEventListener('DOMContentLoaded', () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});

// THEMES
const STORAGE_KEY = "bulma-theme";
const SYSTEM_THEME = "system";
const DEFAULT_THEME = "light";

const state = {
  chosenTheme: SYSTEM_THEME, // light|dark|system
  appliedTheme: DEFAULT_THEME, // light|dark
  OSTheme: null, // light|dark|null
};

const updateThemeUI = () => {
  const isLightTheme = state.appliedTheme === "light";
  const themeIcon = document.getElementById("theme-icon");
  themeIcon.classList.remove("has-text-link", "has-text-warning");
  themeIcon.classList.add(isLightTheme ? "has-text-warning" : "has-text-link");
  const themeIconHtml = "<i class=\"fas fa-sun\"></i>"
  themeIcon.children[0].innerHTML = isLightTheme ? themeIconHtml : themeIconHtml.replace("sun", "moon");
};

const setTheme = (theme, save = true) => {
  state.chosenTheme = theme;
  state.appliedTheme = theme;
  if (theme === SYSTEM_THEME) {
    state.appliedTheme = state.OSTheme;
    document.documentElement.removeAttribute("data-theme");
    window.localStorage.removeItem(STORAGE_KEY);
  } else {
    document.documentElement.setAttribute("data-theme", theme);
    if (save) {
      window.localStorage.setItem(STORAGE_KEY, theme);
    }
  }
  updateThemeUI();
};

const toggleTheme = () => {
  if (state.appliedTheme === "light") {
    setTheme("dark");
  } else {
    setTheme("light");
  }
};

const detectOSTheme = () => {
  if (!window.matchMedia) {
    // matchMedia method not supported
    return DEFAULT_THEME;
  }
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    // OS theme setting detected as dark
    return "dark";
  } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    return "light";
  }
  return DEFAULT_THEME;
};

// On load, check if any preference was saved
window.addEventListener("DOMContentLoaded", () => {
  const localTheme = window.localStorage.getItem(STORAGE_KEY);
  state.OSTheme = detectOSTheme();
  if (localTheme) {
    setTheme(localTheme, false);
  } else {
    setTheme(SYSTEM_THEME);
  }
  // Event listeners
  const $themeSwitchers = document.querySelectorAll(".js-themes .navbar-item");
  $themeSwitchers.forEach((el) => {
    el.addEventListener("click", () => {
      setTheme(el.dataset.scheme);
    });
  });
});

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
  const theme = event.matches ? "dark" : "light";
  state.OSTheme = theme;
  setTheme(theme);
});
