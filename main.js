      const root = document.documentElement;
      const toggleBtn = document.getElementById("themeToggle");

      function applyTheme(theme) {
        if (theme === "light") {
          root.setAttribute("data-theme", "light");
          toggleBtn.textContent = "☀️";
        } else {
          root.removeAttribute("data-theme");
          toggleBtn.textContent = "🌙";
        }
      }

      let currentTheme = "dark";
      applyTheme(currentTheme);

      toggleBtn.addEventListener("click", function () {
        currentTheme = currentTheme === "dark" ? "light" : "dark";
        applyTheme(currentTheme);
      });