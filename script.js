document.addEventListener('DOMContentLoaded', () => {
    const heart = document.getElementById('heart');
    const fallingHeartsContainer = document.getElementById('falling-hearts');
    const loadingOverlay = document.getElementById('loading-overlay');

    // Generar corazones que caen
    function createFallingHeart() {
        const heart = document.createElement('img');
        heart.src = 'corazoncito rosado.png'; // Asegúrate de que esta sea la ruta correcta
        heart.classList.add('heart-falling');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // Duración entre 3s y 5s
        fallingHeartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000); // Eliminar después de 5s
    }

    // Crear corazones de manera continua
    setInterval(createFallingHeart, 200);

    // Mostrar animación de cargando y redirigir
    heart.addEventListener('click', () => {
        loadingOverlay.classList.remove('hidden'); // Mostrar el overlay de cargando
        setTimeout(() => {
            window.location.href = 'carta.html'; // Redirigir después de 2 segundos
        }, 2000);
    });
});

/* ------------------------------------------------------------- */

// Navegación entre secciones
function navigateTo(section) {
    document.querySelectorAll('section').forEach((sec) => sec.classList.add('hidden'));
    document.getElementById(section)?.classList.remove('hidden');
    if (section === 'home') {
        document.querySelector('.hero').classList.remove('hidden');
    } else {
        document.querySelector('.hero').classList.add('hidden');
    }
}

// Manejo del Test de Personalidad
document.getElementById('quiz').addEventListener('submit', (event) => {
    event.preventDefault();
    const color = document.getElementById('color').value;
    const dia = document.getElementById('dia').value;
    const momento = document.getElementById('momento').value;

    const resultado = `
        <h3>Resultados del Test</h3>
        <p>Tu color es: <strong>${color}</strong>.</p>
        <p>Lo que alegra tu día: <strong>${dia}</strong>.</p>
        <p>Tu momento favorito juntos: <strong>${momento}</strong>.</p>
    `;
    document.getElementById('resultado').innerHTML = resultado;
    document.getElementById('resultado').classList.remove('hidden');
});
