/* //EJERCICIO 1
--------------------------------------------------------------------------------------------- */

// 1. Programe en JavaScript lo que ve en este diagrama de flujo. 
// Sí, tiene los rombos deformados para ahorrar espacio. 
// Se perdona el uso de las funciones prompt y alert para este ejercicio.

/* let numero =+window.prompt('Ingrese un numero') || 0;
if (numero %1 !=0){
    window.alert(numero + 'e numero ')
} */

/* //EJERCICIO 2
--------------------------------------------------------------------------------------------- */
// 2. Pruebe cada cálculo
//  en la consola del navegador web y escriba el resultado.

//false||true&&false	  false    	undefined?'a':'b'	   b
//""??"algo"	          "         ''||'algo'	           algo
// false??"algo"		  false     ''?'a':'b'	           b
// null??"algo"	          algo    	1+"+"+1+"="+2	       1+1=2
// 0?'a':'b'          	  b        	2==='2'	               false

/* //EJERCICIO 3
--------------------------------------------------------------------------------------------- */

/* 3. Programe en 1 archivo JSON un arreglo como el siguiente. 
Desde código JavaScript recupere con la función fetch el contenido para asignarlo en una variable, 
luego pida ingreso de usuario (HTML o prompt), use lo ingresado para filtrar por autor y título,
 e imprima el resultado (HTML, alert, otro medio). El filtro debe ser insensible a acentos, mayúsculas, 
 minúsculas y debe buscar en comienzo, medio y fin de los campos.

[ { "id": 1, "titulo": "Boquitas pintadas", "autor": "Manuel Puig", "precio": 12.34, "agotado": false  }, 
{ "id": 2, "titulo": "Pedro Páramo", "autor": "Juan Rulfo", "precio": 64.35, "agotado": false  }, 
{ "id": 3, "titulo": "El castillo", "autor": "Franz Kafka", "precio": 94.63, "agotado": false  }, 
{ "id": 4, "titulo": "Antología poética", "autor": "Alfonsina Storni", "precio": 47.75, "agotado": false  }, 
{ "id": 5, "titulo": "Martín Fierro", "autor": "José Hernández", "precio": 85.57, "ocultar": false  } ]
 */


/* fetch('libros.json')
  .then(response => response.json())
  .then(datos => {
    const libros = datos;
    const busqueda = document.getElementById('busqueda');
    const resultados = document.getElementById('resultados');

    // Función para buscar libros
    function buscarLibros() {
      const texto = busqueda.value.toLowerCase();
      resultados.innerHTML = '';

      libros.forEach(libro => {
        const tituloEncontrado = libro.titulo.toLowerCase().includes(texto);
        const autorEncontrado = libro.autor.toLowerCase().includes(texto);

        if (tituloEncontrado || autorEncontrado) {
          const div = document.createElement('div');
          div.className = 'libro';
          div.innerHTML = `
            <h2>${libro.titulo}</h2>
            <p>Autor: ${libro.autor}</p>
            <p>Precio: $${libro.precio}</p>
            <p>Agotado: ${libro.agotado ? 'Sí' : 'No'}</p>
          `;
          resultados.appendChild(div);
        }
      });
    }

    // Escuchar el evento de entrada en el campo de búsqueda
    busqueda.addEventListener('input', buscarLibros);
  })
  .catch(error => console.error(error));


 */

/* //EJERCICIO 4
--------------------------------------------------------------------------------------------- */

/* function agregarCampoA(estructura, valor){
    estructura.a = valor;
}
function agregarCampoB(estructura, valor){
    estructura['b'] = 123;
}
var arreglo = [];
arreglo[0] = {};
arreglo[1] = {};
arreglo[2] = {};
agregarCampoA(arreglo[0], "Hola, mundo.");
agregarCampoB(arreglo[1], true);
agregarCampoA(arreglo[2], 'F');
agregarCampoB(arreglo[2], 6.3);
console.log(arreglo[0]);
console.log(arreglo[1]);
console.log(arreglo[2]); */
/* 
function agregarCampoA(objeto, valor) {
    objeto.a = valor;
  }
  
  function agregarCampoB(objeto, valor) {
    objeto.b = valor;
  }
  
  const arreglo = [{}, {}, {}];
  
  agregarCampoA(arreglo[0], "Hola, mundo.");
  agregarCampoB(arreglo[1], 123);
  agregarCampoA(arreglo[2], 'F');
  agregarCampoB(arreglo[2], 6.3);
  
  console.log(arreglo[0]);
  console.log(arreglo[1]);
  console.log(arreglo[2]); */
  
/* //EJERCICIO 5
--------------------------------------------------------------------------------------------- */

/* a. compilador versus intérprete.
    El objetivo de los compiladores es obtener una traducción del programa fuente a otro lenguaje, 
    los intérpretes tienen como objeto la obtención de los resultados del programa.

b. Enterprise Resource Planning (Supply Chain Management, Client Relation Management, Supplier Relation Management),
ERP (Enterprise Resource Planning):

  El ERP es un sistema integral de gestión empresarial que permite a las organizaciones integrar y 
  administrar eficientemente todos sus procesos y recursos. Algunas características clave del ERP son:

•	Centralización: Proporciona una plataforma centralizada para gestionar actividades como finanzas, contabilidad, 
compras, ventas, inventario, recursos humanos y producción.
•	Automatización y Agilidad: Automatiza operaciones y agiliza procesos, lo que mejora la eficiencia general.
•	Visibilidad en Tiempo Real: Permite una visión en tiempo real de los datos, facilitando la toma de decisiones informadas.
•	Evita Duplicidades: Al contar con una única fuente de información, se evitan duplicidades y se mejora la colaboración 
entre departamentos.


CRM (Customer Relationship Management):

El CRM se enfoca en la gestión de relaciones con los clientes y la optimización de las interacciones comerciales. 
Algunas características clave del CRM son:

•	Enfoque en Clientes: El CRM mejora la captación, gestión y retención de clientes. Permite el seguimiento de las 
interacciones con cada cliente a lo largo de su ciclo de vida.
•	Visión de 360 Grados: Proporciona una visión completa de los clientes, lo que permite ofrecer un servicio 
personalizado y satisfactorio.
•	Beneficios Comerciales: Ayuda a aumentar las ventas, optimizar el servicio al cliente y gestionar campañas de 
marketing de manera eficiente.

SCM (Supply Chain Management):

El SCM se encarga de gestionar y optimizar todo lo relacionado con la cadena de suministro, desde la adquisición de 
materias primas hasta la entrega del producto final al cliente. Algunas características clave del SCM son:

•	Planificación de la Demanda: El SCM abarca la planificación de la demanda, asegurando que los recursos estén 
disponibles cuando se necesiten.
•	Gestión de Inventarios: Permite una gestión eficiente de los inventarios, evitando excesos o faltantes.
•	Colaboración con Proveedores: Facilita la colaboración con proveedores para una cadena de suministro más fluida.
•	Visibilidad en Tiempo Real: Proporciona visibilidad en tiempo real de los procesos logísticos, lo que permite una 
respuesta rápida a las demandas del mercado.
Una solución popular de SCM es SAP Ariba, una plataforma completa de gestión de compras y suministros que mejora la 
colaboración entre compradores y proveedores. En resumen, el ERP se enfoca en la gestión integral de recursos empresariales, el CRM en la relación con los clientes y el SCM en la cadena de suministro. Juntas, estas soluciones mejoran la eficiencia y competitividad de las empresas.

CRM (Customer Relationship Management):

El CRM es una herramienta tecnológica que ayuda a las empresas a gestionar sus relaciones con los clientes y 
optimizar las interacciones comerciales.
Funciones Clave:
•	Centralización: Organiza la información de los clientes en un solo lugar.
•	Automatización: Agiliza tareas y procesos.
•	Visión 360 Grados: Proporciona una vista completa de los clientes.
•	Mejora la Eficiencia: Facilita la comunicación y seguimiento.
Beneficios:
•	Generación de Prospectos: A través de medios digitales.
•	Automatización de Tareas: Flujos de conversación y seguimiento.
•	Medición de Resultados: Evalúa el desempeño comercial en tiempo real.

c. Integrated CASE, Lower CASE, Meta CASE, Middle CASE, Upper CASE,
d. try-catch-finally versus Promise then-catch-finally,
e. 1 metodología ágil (artefactos, proceso, roles).
 */

