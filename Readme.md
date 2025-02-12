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

## Estructura del proyecto:
boxit-store/                     # Carpeta raíz del proyecto
├── src/                         # Carpeta principal del código fuente
│   ├── controllers/             # Controladores: Manejan la lógica de las rutas
│   │   ├── ProductoController.ts # Controlador para la entidad Producto
│   │   ├── UsuarioController.ts  # Controlador para la entidad Usuario
│   │   ├── PedidoController.ts   # Controlador para la entidad Pedido
│   │   └── DetallePedidoController.ts # Controlador para la entidad DetallePedido
│   ├── models/                  # Modelos: Definen las entidades y su relación con la base de datos
│   │   ├── Producto.ts          # Modelo para la entidad Producto
│   │   ├── Usuario.ts           # Modelo para la entidad Usuario
│   │   ├── Pedido.ts            # Modelo para la entidad Pedido
│   │   ├── DetallePedido.ts     # Modelo para la entidad DetallePedido
│   │   └── index.ts             # Configuración de Sequelize y exportación de modelos
│   ├── routes/                  # Rutas: Definen los endpoints de la API
│   │   ├── ProductoRoutes.ts    # Rutas para la entidad Producto
│   │   ├── UsuarioRoutes.ts     # Rutas para la entidad Usuario
│   │   ├── PedidoRoutes.ts      # Rutas para la entidad Pedido
│   │   └── DetallePedidoRoutes.ts # Rutas para la entidad DetallePedido
│   ├── services/                # Servicios: Lógica de negocio y acceso a datos
│   │   ├── ProductoService.ts   # Servicio para la entidad Producto
│   │   ├── UsuarioService.ts    # Servicio para la entidad Usuario
│   │   ├── PedidoService.ts     # Servicio para la entidad Pedido
│   │   └── DetallePedidoService.ts # Servicio para la entidad DetallePedido
│   ├── utils/                   # Utilidades: Funciones auxiliares y helpers
│   │   ├── errorHandler.ts      # Manejo centralizado de errores
│   │   ├── logger.ts            # Utilidad para logging
│   │   └── validators.ts        # Validaciones personalizadas
│   └── index.ts                 # Punto de entrada de la aplicación (configuración de Express y servidor)
├── scripts/                     # Scripts y archivos de configuración
│   └── create-tables.sql        # Script SQL para crear las tablas en la base de datos
├── tsconfig.json                # Configuración de TypeScript para el proyecto
└── package.json                 # Archivo de configuración de npm (dependencias y scripts)
