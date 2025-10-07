# language: es
Característica: Login en la aplicación
  Como usuario del sistema
  Quiero poder iniciar sesión
  Para acceder a las funcionalidades de la aplicación

  Antecedentes:
    Dado que el usuario navega a la página de login

  Escenario: Login exitoso con credenciales válidas
    Cuando el usuario ingresa el nombre de usuario "standard_user"
    Y el usuario ingresa la contraseña "secret_sauce"
    Y el usuario hace click en el botón de login
    Entonces el usuario debería ver la página de inventario
    Y el usuario debería estar autenticado correctamente

  Escenario: Login fallido con credenciales inválidas
    Cuando el usuario ingresa el nombre de usuario "invalid_user"
    Y el usuario ingresa la contraseña "wrong_password"
    Y el usuario hace click en el botón de login
    Entonces el usuario debería ver un mensaje de error
    Y el usuario no debería estar autenticado