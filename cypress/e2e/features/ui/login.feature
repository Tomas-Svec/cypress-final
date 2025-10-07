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

  Escenario: Login exitoso y agregar producto al carrito
    Cuando el usuario ingresa el nombre de usuario "standard_user"
    Y el usuario ingresa la contraseña "secret_sauce"
    Y el usuario hace click en el botón de login
    Y el usuario agrega el producto "Sauce Labs Backpack" al carrito
    Entonces el carrito debería mostrar 1 producto
    Y el badge del carrito debería mostrar el número "1"

  Escenario: Login exitoso y agregar múltiples productos
    Cuando el usuario ingresa el nombre de usuario "standard_user"
    Y el usuario ingresa la contraseña "secret_sauce"
    Y el usuario hace click en el botón de login
    Y el usuario agrega el producto "Sauce Labs Backpack" al carrito
    Y el usuario agrega el producto "Sauce Labs Bike Light" al carrito
    Y el usuario agrega el producto "Sauce Labs Bolt T-Shirt" al carrito
    Entonces el carrito debería mostrar 3 productos
    Y el badge del carrito debería mostrar el número "3"

  Escenario: Verificar productos en el carrito
    Cuando el usuario ingresa el nombre de usuario "standard_user"
    Y el usuario ingresa la contraseña "secret_sauce"
    Y el usuario hace click en el botón de login
    Y el usuario agrega el producto "Sauce Labs Backpack" al carrito
    Y el usuario navega al carrito de compras
    Entonces el producto "Sauce Labs Backpack" debería estar en el carrito
    Y el usuario debería poder remover el producto del carrito

  Esquema del escenario: Agregar diferentes productos al carrito
    Cuando el usuario ingresa el nombre de usuario "standard_user"
    Y el usuario ingresa la contraseña "secret_sauce"
    Y el usuario hace click en el botón de login
    Y el usuario agrega el producto "<producto>" al carrito
    Entonces el carrito debería mostrar 1 producto

    Ejemplos:
      | producto                   |
      | Sauce Labs Backpack        |
      | Sauce Labs Bike Light      |
      | Sauce Labs Bolt T-Shirt    |
      | Sauce Labs Fleece Jacket   |

  Escenario: Flujo completo - Agregar productos, eliminar uno y proceder al checkout
    Cuando el usuario ingresa el nombre de usuario "standard_user"
    Y el usuario ingresa la contraseña "secret_sauce"
    Y el usuario hace click en el botón de login
    Y el usuario agrega el producto "Sauce Labs Backpack" al carrito
    Y el usuario agrega el producto "Sauce Labs Bike Light" al carrito
    Y el usuario agrega el producto "Sauce Labs Bolt T-Shirt" al carrito
    Y el usuario agrega el producto "Sauce Labs Fleece Jacket" al carrito
    Entonces el carrito debería mostrar 4 productos
    Cuando el usuario navega al carrito de compras
    Entonces el producto "Sauce Labs Backpack" debería estar en el carrito
    Y el producto "Sauce Labs Bike Light" debería estar en el carrito
    Y el producto "Sauce Labs Bolt T-Shirt" debería estar en el carrito
    Y el producto "Sauce Labs Fleece Jacket" debería estar en el carrito
    Cuando el usuario elimina el producto "Sauce Labs Bike Light" del carrito
    Entonces el producto "Sauce Labs Bike Light" no debería estar visible en el carrito
    Y el carrito debería tener 3 productos visibles
    Cuando el usuario hace click en el botón de checkout
    Entonces el usuario debería ver el formulario de información del checkout

  Escenario: Completar compra con checkout exitoso
    Cuando el usuario ingresa el nombre de usuario "standard_user"
    Y el usuario ingresa la contraseña "secret_sauce"
    Y el usuario hace click en el botón de login
    Y el usuario agrega el producto "Sauce Labs Backpack" al carrito
    Y el usuario agrega el producto "Sauce Labs Bike Light" al carrito
    Y el usuario navega al carrito de compras
    Entonces el carrito debería tener 2 productos visibles
    Cuando el usuario hace click en el botón de checkout
    Y el usuario completa el formulario de checkout con datos aleatorios
    Y el usuario hace click en continuar
    Entonces el usuario debería ver la página de resumen del pedido
    Y el resumen debería mostrar 2 productos
    Cuando el usuario hace click en el botón finish
    Entonces el usuario debería ver el mensaje de confirmación del pedido
    Y el mensaje debería indicar que el pedido fue exitoso
    Cuando el usuario hace click en el botón back home
    Entonces el usuario debería regresar a la página de inventario