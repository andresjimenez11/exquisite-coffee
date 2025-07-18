# Exquisite Coffee ☕

_Exquisite Coffee es una aplicación completa diseñada para facilitar la experiencia de compra de café de alta calidad en una tienda virtual._

## Comenzando 🚀

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

Consulta la sección **Despliegue** para ver cómo desplegar el proyecto.

### Pre-requisitos 📋

Necesitarás las siguientes herramientas para ejecutar el proyecto:

- Node.js y NPM o Yarn para el frontend
- PHP y Composer para el backend
- MySQL para la base de datos

Ejemplo:

```
# Instalación de Node.js
sudo apt-get install nodejs
```
```
# Instalación de Composer
sudo apt install composer
```

## Instalación 🔧

A continuación se detallan los pasos para configurar el entorno de desarrollo:

1. **Clonar el repositorio:**

   ```
   git clone https://github.com/tu_usuario/exquisite-coffee.git
   ```
    
2. **Instalar dependencias del frontend y backend:**
    
    Para el frontend (React JS):
   ```
   cd exquisite-coffee/frontend
   npm install
   ```

    Para el backend (PHP Laravel):
   ```
   cd ../backend
   composer install
   ```

3. **Configurar variables de entorno:**
    
    En el backend, copia el archivo `.env.example` a `.env` y agrega las         credenciales necesarias para conectar la base de datos MySQL.

    ```
    cp .env.example .env
    php artisan key:generate
    
    ```
    
    En el archivo `.env` configura la base de datos.
    
    ```
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=nombre_base_datos
    DB_USERNAME=tu_usuario
    DB_PASSWORD=tu_contraseña
    
    ```
    
4. **Migrar y poblar la base de datos:**

    ```
    php artisan migrate --seed
    
    ```

4. **Iniciar el proyecto:**

    Iniciar el frontend:
    
    ```
    cd ../frontend
    npm start
    
    ```
    
    Iniciar el backend:
    
    ```
    cd ../backend
    php artisan serve
    
    ```


## Ejecutando las pruebas ⚙️

### Pruebas end-to-end 🔩

_Las pruebas end-to-end garantizan que los flujos de usuario críticos funcionen de principio a fin._

```
# Ejemplo de ejecución en el backend
php artisan test
```

### Pruebas de estilo de codificación ⌨️

_Para mantener un estilo de código consistente, ejecuta las pruebas de linting en el frontend._

```
# Ejemplo de ejecución en el frontend
npm run lint
```

## Despliegue 📦
Consulta las notas adicionales sobre cómo hacer deploy en el archivo `DEPLOY.md`.

## Construido con 🛠️
- **React JS** - Para el frontend
- **PHP Laravel** - Para el backend
- **MySQL** - Base de datos

## Autores ✒️
- **Andrés** - Desarrollador principal - `andresjimenez11`

- ⌨️ con ❤️ por  [Andrés](https://github.com/andresjimenez11)😊