const boton = document.getElementById("temaBtn");

boton.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        boton.textContent = "☀️ Modo Claro";
    } else {
        boton.textContent = "🌙 Modo Oscuro";
    }

});

// Texto inicial del botón
boton.textContent = "🌙 Modo Oscuro";