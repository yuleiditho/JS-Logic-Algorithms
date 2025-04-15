const fs = require('fs');

// Ruta del archivo de notas
const filePath = './notas.json';

/**
 * Agrega una nueva nota al archivo.
 * @param {string} titulo - El título de la nota.
 * @param {string} contenido - El contenido de la nota.
 */
function agregarNota(titulo, contenido) {
  let notas = [];
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    notas = JSON.parse(data);
  }

  const nuevaNota = { titulo, contenido };
  notas.push(nuevaNota);

  fs.writeFileSync(filePath, JSON.stringify(notas, null, 2));
  console.log('Nota agregada con éxito.');
}

/**
 * Lista todas las notas guardadas.
 */
function listarNotas() {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    const notas = JSON.parse(data);
    
    console.log('\nNotas guardadas:');
    notas.forEach((nota, index) => {
      console.log(`${index + 1}. Título: ${nota.titulo}`);
      console.log(`   Contenido: ${nota.contenido}\n`);
    });
  } else {
    console.log('No hay notas guardadas.');
  }
}

/**
 * Elimina una nota por su título.
 * @param {string} titulo - El título de la nota a eliminar.
 */
function eliminarNota(titulo) {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    let notas = JSON.parse(data);
    
    const cantidadInicial = notas.length;
    notas = notas.filter(nota => nota.titulo !== titulo);
    
    if (notas.length < cantidadInicial) {
      fs.writeFileSync(filePath, JSON.stringify(notas, null, 2));
      console.log(`Nota con título "${titulo}" eliminada.`);
    } else {
      console.log(`No se encontró ninguna nota con título "${titulo}".`);
    }
  } else {
    console.log('No hay notas para eliminar.');
  }
}

// Ejecución de ejemplo
agregarNota('Compras', 'Comprar leche y pan.');
agregarNota('Trabajo', 'Terminar reporte semanal.');
agregarNota('Recordatorio', 'Enviar documentación.');
listarNotas();
eliminarNota('Compras');
listarNotas();