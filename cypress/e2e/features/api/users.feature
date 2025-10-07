# language: es
Característica: API de usuarios
  Como desarrollador del sistema
  Quiero probar los endpoints de usuarios
  Para asegurar que la API funciona correctamente

  Antecedentes:
    Dado que la API está disponible en el ambiente configurado

  Escenario: Obtener lista de usuarios exitosamente
    Cuando realizo una petición GET al endpoint "/users"
    Entonces el código de respuesta debe ser 200
    Y la respuesta debe contener una lista de usuarios
    Y cada usuario debe tener los campos "id", "email" y "name"
    Y la lista debe contener al menos 5 usuarios

  Escenario: Crear un nuevo usuario
    Dado que genero datos aleatorios para un nuevo usuario
    Cuando realizo una petición POST al endpoint "/users" con los datos generados
    Entonces el código de respuesta debe ser 201
    Y la respuesta debe contener el campo "id"
    Y el nombre del usuario creado debe coincidir con el enviado

  Escenario: Obtener un usuario específico por ID
    Cuando realizo una petición GET al endpoint "/users/1"
    Entonces el código de respuesta debe ser 200
    Y la respuesta debe contener los datos del usuario
    Y el usuario debe tener el email esperado

  Escenario: Actualizar datos de un usuario
    Dado que genero un nombre aleatorio para actualizar
    Cuando realizo una petición PUT al endpoint "/users/1" con el nuevo nombre
    Entonces el código de respuesta debe ser 200

  Esquema del escenario: Obtener diferentes usuarios por ID
    Cuando realizo una petición GET al endpoint "/users/<id>"
    Entonces el código de respuesta debe ser <codigo>

    Ejemplos:
      | id | codigo |
      | 1  | 200    |
      | 2  | 200    |