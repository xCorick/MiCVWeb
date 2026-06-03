const boton = document.getElementById("temaBtn");
const formulario = document.getElementById("contactoForm");
const resultado = document.getElementById("resultado");

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

formulario.addEventListener("submit", (e) => {

    e.preventDefault();

    const nombre = document.getElementById("nombre").value;

    resultado.textContent =
        `Gracias ${nombre}, tu mensaje ha sido recibido.`;

    formulario.reset();
});