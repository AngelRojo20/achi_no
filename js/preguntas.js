function calcularPuntuacion() {
    let puntuacion = 0;

    // Respuestas correctas
    const respuestasCorrectas = {
        pregunta1: "Andean",
        pregunta2: "Achira flour, fresh cheese, and butter",
        pregunta3: "Hospitalidad",
        pregunta4: "25 de junio",
        pregunta5: "Tratar el reumatismo y la mastitis"
    };

    // Verificar respuestas
    for (let pregunta in respuestasCorrectas) {
        const respuestaSeleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);
        if (respuestaSeleccionada && respuestaSeleccionada.value === respuestasCorrectas[pregunta]) {
            puntuacion++;
        }
    }

    // Mostrar puntuación final
    const mensaje = `Tu puntuación final es: ${puntuacion} de 5.`;
    document.getElementById("resultado").innerText = mensaje;
    return false; // Para evitar que el formulario se recargue
}