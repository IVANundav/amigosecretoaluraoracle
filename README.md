# amigosecretoaluraoracle
Este código es un script de JavaScript que permite a los usuarios agregar nombres a una lista de amigos, seleccionar uno al azar como "amigo secreto" y, si es necesario, reiniciar la lista. A continuación se explica cada parte del código:

Variables Globales
inputAmigo: Esta variable hace referencia al elemento HTML que permite al usuario ingresar el nombre de su amigo. Se busca un elemento con el ID "amigo".

listaAmigos: Esta es una array (lista) que almacenará los nombres de los amigos ingresados por el usuario.

ulListaAmigos: Esta variable se refiere a un elemento HTML donde se mostrarán los nombres de los amigos que han sido agregados. Se busca un elemento con el ID "listaAmigos".

ulResultado: Similar a ulListaAmigos, esta variable se refiere al lugar donde se mostrará el resultado del sorteo del amigo secreto.

Funciones del Código
1. agregarAmigo()
Esta función se encarga de agregar un nombre de amigo a la lista:

Obtener el nombre: Usa .value.trim() para obtener el contenido del campo de entrada y eliminar espacios al principio y al final.

Validar entrada: Utiliza una expresión regular (/^[A-Za-z áéíóúñÑ]+$/) para asegurarse de que el nombre solo contenga letras, espacios y acentos.

Comprobaciones:

Si el campo está vacío, muestra un mensaje de advertencia.
Si el nombre no es válido (de acuerdo con la expresión regular), también muestra un mensaje de advertencia.
Verifica si el nombre ya está en la lista. Si está, muestra un mensaje indicando que ya existe.
Agregar a la lista: Si todas las validaciones son superadas, se agrega el nombre a listaAmigos, se actualiza el contenido HTML de ulListaAmigos para mostrar el nuevo amigo y se limpia el campo de entrada.

2. sortearAmigo()
Esta función selecciona un amigo al azar de la lista:

Comprobación de la lista: Si no hay amigos en la lista, muestra un mensaje de advertencia.

Selección aleatoria: Utiliza Math.random() para generar un índice aleatorio y seleccionar un amigo de la lista.

Mostrar resultado: Actualiza el contenido HTML de ulResultado para mostrar el amigo secreto seleccionado.

3. reiniciarSorteo()
Esta función se puede usar para limpiar la lista y reiniciar el estado de la aplicación:

Limpiar la lista: Vacía el array listaAmigos y el contenido de ulListaAmigos y ulResultado.

Mensaje de confirmación: Muestra un mensaje alertando al usuario que el sorteo ha sido reiniciado.

Consideraciones
En resumen, este código implementa una funcionalidad básica para manejar una lista de amigos, permitiendo agregar nombres, realizar un sorteo y reiniciar el sistema. Los nombres se validan para asegurarse de que son apropiados, evitando entradas no deseadas.
