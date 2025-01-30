const toggleButton = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

const setTheme = (theme) => {
    if (theme === "dark") {
        document.documentElement.classList.add("dark-mode");
        themeIcon.src = "/media/icons/sun.png"; // Icono de sol
        themeIcon.alt = "Modo Oscuro";
    } else {
        document.documentElement.classList.remove("dark-mode");
        themeIcon.src = "/media/icons/moon.png"; // Icono de luna
        themeIcon.alt = "Modo Claro";
    }
    localStorage.setItem("theme", theme);
}

// Detectar preferencia guardada
const savedTheme = localStorage.getItem("theme") || "light";
setTheme(savedTheme);

// Cambiar tema al hacer clic
toggleButton.addEventListener("click", () => {
    const currentTheme = document.documentElement.classList.contains("dark-mode") ? "light" : "dark";
    setTheme(currentTheme);
});