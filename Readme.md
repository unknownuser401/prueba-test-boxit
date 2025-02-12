# Prueba Tecnica Boxit Store APP

## Instalación:

1. Clonar el repositorio.
2. Instalar las dependencias:
   npm install
3. Configurar las variables de entorno para la conexión a SQL Server y MongoDB. #(Importante!)

## Ejecuta el proyecto:
npm start
Una vez inicializado el servidor se puede probar el proyecto

## Prueba del Proyecto:
probar los endpoints del api por medio de Postman o Thunderbolt

## Estructura del Proyecto

- **`boxit-store/`**
  - **`src/`**
    - **`controllers/`**
      - `ProductoController.ts`
      - `UsuarioController.ts`
      - `PedidoController.ts`
      - `DetallePedidoController.ts`
    - **`models/`**
      - `Producto.ts`
      - `Usuario.ts`
      - `Pedido.ts`
      - `DetallePedido.ts`
      - `index.ts`
    - **`routes/`**
      - `ProductoRoutes.ts`
      - `UsuarioRoutes.ts`
      - `PedidoRoutes.ts`
      - `DetallePedidoRoutes.ts`
    - **`services/`**
      - `ProductoService.ts`
      - `UsuarioService.ts`
      - `PedidoService.ts`
      - `DetallePedidoService.ts`
    - **`utils/`**
      - `errorHandler.ts`
      - `logger.ts`
      - `validators.ts`
    - `index.ts`
  - **`scripts/`**
    - `create-tables.sql`
  - `tsconfig.json`
  - `package.json`

### Explicación de la Estructura

- **`src/`**: Contiene todo el código fuente de la aplicación.
  - **`controllers/`**: Controladores para manejar la lógica de las rutas.
  - **`models/`**: Modelos para definir las entidades y su relación con la base de datos.
  - **`routes/`**: Rutas de la API.
  - **`services/`**: Lógica de negocio y acceso a datos.
  - **`utils/`**: Utilidades y funciones auxiliares.
  - **`index.ts`**: Punto de entrada de la aplicación.

- **`scripts/`**: Scripts y archivos de configuración.
  - **`create-tables.sql`**: Script SQL para crear las tablas en la base de datos.

- **`tsconfig.json`**: Configuración de TypeScript.

- **`package.json`**: Configuración de npm (dependencias y scripts).
