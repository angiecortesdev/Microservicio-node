# **Backend - Microservicio en Node.js con Express**

## **Descripción**
Este microservicio se conecta a una base de datos PostgreSQL y expone una API REST para realizar operaciones CRUD (crear, leer, actualizar, eliminar) sobre una tabla llamada `usuarios`.

---

## **Requisitos**
- **Node.js**: Última versión estable
- **PostgreSQL**: Base de datos configurada localmente
- **Librerías**:
  - `express`
  - `pg`
  - `cors`

---

## **Estructura del Proyecto**

/backend ├── index.js # Archivo principal del servidor ├── package.json # Configuración de dependencias ├── .gitignore # Archivos y carpetas ignorados por Git └── README.md # Documentación del backend


## **Pasos para Configurar el Backend**
1. **Clonar el repositorio:**
   ```bash
   git clone <https://github.com/angiecortesdev/Microservicio-node.git>
   cd backend

2. **Instalar dependencias:**

     `` npm install ``

     `` npm init -y``

 *  ##### configurar el package.json
```
"scripts": {
    "start": "node src/index.js",
    "dev": "node --env-file .env --watch src/index.js"
  },
```

 * Ejecutar el comando:
  
  ``
   npm run dev
  ``


# ***3. Configurar la base de datos PostgreSQL***
Asegúrese de que PostgreSQL esté instalado y en ejecución. Luego:
  ##### 1. Accede a PostgreSQL:
```
psql -U su_usuario
```

  ##### 2. Crea la base de datos:
```
CREATE DATABASE prueba_fullstack;
```

  ##### 3. Crea la tabla usuarios dentro de la base de datos:
```
\c prueba_fullstack;
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    correo VARCHAR(100),
    edad INT
);
```

# ***4. Probar la API***
Utiliza herramientas como Postman o cURL para probar las rutas del API:
 * Obtener todos los usuarios (GET):
  ```
    GET http://localhost:3000/api/data
  ```
 
 * Crear un usuario (POST):
  ```
   POST http://localhost:3000/api/data
   Body (JSON):
   {
     "nombre": "Juan Pérez",
     "correo": "juan.perez@example.com",
     "edad": 30
   }
  ```
 * Actualizar un usuario (PUT):
  ```
    PUT http://localhost:3000/api/data/1
    Body (JSON):
    {
       "nombre": "Juan Actualizado",
       "correo": "juan.actualizado@example.com",
       "edad": 31
}
  ```
  
  * Eliminar un usuario (DELETE):
    ```
    DELETE http://localhost:3000/api/data/1
  ```


  # ***5. Configuración de Variables de Entorno***

Utiliza herramientas como Postman o cURL para probar las rutas del API:
 * Obtener todos los usuarios (GET):
  Las variables de entorno se utilizan para mantener información sensible (como credenciales de bases de datos) fuera del código fuente. A continuación, se detalla cómo configurar y utilizar las variables de entorno en este proyecto.

---

## Paso 1: Instalar `dotenv`
Primero, instala el paquete `dotenv`, que permite cargar las variables de entorno desde un archivo `.env`:

``bash
  npm install dotenv
``


## Paso 2: Crear el archivo .env
Crea un archivo llamado .env en la raíz del proyecto y agrega las siguientes variables:
# Configuración de la base de datos
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_HOST=localhost
DB_PORT=5432
DB_NAME=prueba_fullstack

# Configuración del servidor
PORT=3000
 - Configuración de conexión a PostgreSQL usando variables
  ``
    const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
   });
``
 - Configuración del puerto
``
const port = process.env.PORT || 3000;
  ``
  