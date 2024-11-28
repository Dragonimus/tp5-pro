// Función de configuración inicial, se ejecuta una vez al inicio
function setup() {
  createCanvas(800, 600);  // Crear lienzo de 800x600 píxeles
  noStroke();  // Eliminar el contorno de las formas
}

// Función de dibujo que se ejecuta continuamente
function draw() {
  background(255);  // Fondo blanco en cada frame

  // Establecer el color de relleno de los triángulos (naranja)
  fill(255, 165, 0);

  // Calcular la posición de los triángulos con movimiento circular
  // Usamos la función 'cos' y 'sin' para el movimiento circular

  for (let i = 0; i < 3; i++) {
    let angle = frameCount * 0.05 + i * TWO_PI / 3;  // Desfase para crear 3 triángulos
    let x = width / 2 + cos(angle) * 200;  // Movimiento en el eje X
    let y = height / 2 + sin(angle) * 200;  // Movimiento en el eje Y

    // Dibujar cada triángulo en su posición calculada
    triangle(x - 20, y + 20, x + 20, y + 20, x, y - 30);  // Triángulo con vértices desplazados
  }
}
