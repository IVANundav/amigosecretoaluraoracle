const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

function agregarAmigo() {
    const amigo = inputAmigo.value.trim();
    
    // Expresión regular para validar que solo haya letras, espacios y acentos
    const nombreValido = /^[A-Za-z áéíóúñÑ]+$/;

    if (amigo === "") {
        alert("Por favor, ingresa un nombre de amigo.");
        return;
    }

    if (!nombreValido.test(amigo)) {
        alert("Por favor, ingresa un nombre válido (solo letras y espacios).");
        return;
    }

    if (listaAmigos.includes(amigo)) {
        alert("Este amigo ya está en la lista.");
        return;
    }

    listaAmigos.push(amigo);
    ulListaAmigos.innerHTML += `<li>${amigo}</li>`;
    inputAmigo.value = ""; // Limpiar el campo de entrada
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    const randomIndex = Math.floor(Math.random() * listaAmigos.length);
    const secretoAmigo = listaAmigos[randomIndex];
    ulResultado.innerHTML = `<li>El amigo secreto es: <strong>${secretoAmigo}</strong></li>`;
}

// Opcionalmente, agrego un botón para reiniciar el sorteo
function reiniciarSorteo() {
    listaAmigos.length = 0; // Vaciar la lista
    ulListaAmigos.innerHTML = ""; // Limpiar la lista en la UI
    ulResultado.innerHTML = ""; // Limpiar el resultado en la UI
    alert("El sorteo ha sido reiniciado.");
}