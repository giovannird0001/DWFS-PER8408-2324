# API de una calculadora online

Las operaciones del servicio:

*Suma de Números: Permite sumar N elementos (por ejemplo, 2+2, 2+2+2). Esto se logra mediante el método POST /calculations, donde se debe especificar en el cuerpo de la solicitud "operation": "addition" y los números a sumar en el array operands con N elementos.

*Resta de Números: Puedes restar N elementos (por ejemplo, 2-2, 2-2-2) utilizando el método POST /calculations, indicando en el cuerpo "operation": "subtraction" y los números a restar en el array operands con N elementos.

*Multiplicación de Números: Para multiplicar N elementos (por ejemplo, 2x2, 2x2x2), utiliza el método POST /calculations, especificando en el cuerpo "operation": "multiplication" y los números a multiplicar en el array operands con N elementos.

*División de Números: Se puede dividir 2 elementos (por ejemplo, 2/2) a través del método POST /calculations, indicando en el cuerpo "operation": "division" y los números a dividir en el array operands con 2 elementos. El primer número es el dividendo y el segundo es el divisor. Si el array operands no contiene exactamente 2 elementos o el resultado de la división es infinito, la API devolverá 400 Bad Request.

*Raíz N-ésima de un Número: Calcula la raíz N-ésima de un número (por ejemplo, Raíz cuadrada de 4, Raíz cúbica de 8) mediante el método POST /calculations. Debes indicar en el cuerpo "operation": "root" y los números en el array operands con 2 elementos. El primero es el radicando y el segundo es el índice. Si el array operands no contiene exactamente 2 elementos, la API devolverá 400 Bad Request.

*Potencia N-ésima de un Número: Para calcular la potencia N-ésima de un número (por ejemplo, 2^2, 3^3, 4^4), utiliza el método POST /calculations. Especifica en el cuerpo "operation": "potency" y los números en el array operands con 2 elementos. El primero es la base y el segundo es el exponente. Si el array operands no contiene exactamente 2 elementos, la API devolverá 400 Bad Request.

*Detalle de Operaciones en Memoria: Para obtener detalles sobre operaciones almacenadas en memoria, emplea el método GET /calculations e indica el calculationId como Query Param. Si el calculationId no se especifica correctamente, la API devolverá 400 Bad Request. Si se proporciona un calculationId que no existe en la memoria, la API responderá con 404 Not Found.

|Método HTTP | URI           | Query Params  | Cuerpo de la Petición                           | Cuerpo de la Respuesta                                 | Códigos de Respuesta                                                        |
|-------------|---------------|---------------|-------------------------------------------------|--------------------------------------------------------|-----------------------------------------------------------------------------|
| POST        | /calculations | N/A           | `{"operation": "addition", "operands": [2, 2]}` | `{"result": 4, "calculationId": 1}`                    | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error               |
| GET         | /calculations | calculationId | N/A                                             | `{"operation": "add", "operands": [2, 2], "result": 4` | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error  |

