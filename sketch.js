// Función de configuración inicial, se ejecuta una vez al inicio
function setup() {
  createCanvas(800, 600);  // Crear lienzo de 800x600 píxeles
  noStroke();  // Eliminar el contorno de las formas
}

// Función de dibujo que se ejecuta continuamente
function draw() {
  background(255);  // Fondo blanco en cada frame

  // Establecer el color de relleno del círculo (rojo)
  fill(255, 0, 0);

  // Calcular la posición del círculo con movimiento circular
  // Usamos la función 'cos' y 'sin' para el movimiento circular
  let x = width / 2 + cos(frameCount * 0.05) * 200;  // Movimiento en el eje X
  let y = height / 2 + sin(frameCount * 0.05) * 200;  // Movimiento en el eje Y

  // Dibujar el círculo en la posición calculada
  ellipse(x, y, 50, 50);  // Círculo de 50x50 píxeles
}
