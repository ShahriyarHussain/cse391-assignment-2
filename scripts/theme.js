let currentTheme = true;

const changeTheme = () => {
  if (currentTheme) {
    document.body.style.background = "#3b3b3b";
    document.getElementById("theme-btn").innerHTML = "!Dark";
    currentTheme = !currentTheme;
  } else {
    document.body.style.background = "#ffffff";
    document.getElementById("theme-btn").innerHTML = "Dark";
    currentTheme = !currentTheme;
  }
};
