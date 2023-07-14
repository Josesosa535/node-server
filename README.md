¿Qué sucedió al usar async y await?
Al utilizar async y await, las funciones asincrónicas se vuelven más fáciles de leer y escribir, ya que permiten escribir código asincrónico de forma más similar a código síncrono. Al usar el keyword await, el programa se detiene hasta que la promesa se resuelva o rechace, lo que simplifica el flujo de control y evita el anidamiento excesivo de callbacks.

¿Qué sucedió al usar el método then()?
El método then() se utiliza para manejar el resultado de una promesa y ejecutar código cuando la promesa se resuelve exitosamente. Al usar el método then(), es necesario encadenar callbacks para manejar tanto el caso exitoso como el caso de error de la promesa.

¿Qué diferencias encontraste entre async, await y el método then()?
La principal diferencia radica en la forma en que se estructura el código. Con async y await, el código asincrónico se puede escribir y leer de manera más secuencial, lo que mejora la legibilidad y el mantenimiento del código. Por otro lado, al utilizar el método then(), es necesario encadenar callbacks para manejar los resultados y errores de las promesas, lo que puede conducir a un código más anidado y menos legible. En resumen, async/await proporciona una sintaxis más concisa y una estructura de código más plana, mientras que el método then() sigue siendo útil en casos donde se requiere más control sobre el flujo de ejecución y el manejo específico de múltiples promesas en paralelo.
