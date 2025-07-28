📦 API de Productos
Esta API permite gestionar productos y autenticarse mediante login. Se conecta a Firebase como backend de datos y utiliza autenticación JWT.

🚀 Instalación
Clona este repositorio:

bash
Copiar
Editar
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
Instala las dependencias:

bash
Copiar
Editar
npm install
Se instalan los siguientes paquetes:

express — servidor web

cors — habilita peticiones entre dominios

body-parser — interpreta los JSON del body

dotenv — gestiona variables de entorno

firebase — conexión con Firestore

jsonwebtoken — autenticación con tokens

⚙️ Configuración
Crea un archivo .env en la raíz del proyecto con tus variables de entorno, por ejemplo:

env
Copiar
Editar
PORT=3000
JWT_SECRET=clave_secreta_segura
FIREBASE_API_KEY=tu_clave
FIREBASE_AUTH_DOMAIN=tu_dominio
FIREBASE_PROJECT_ID=tu_project_id
...
El servidor se inicia desde index.js, donde:

Se configura CORS

Se habilita body-parser globalmente

Se definen las rutas

Se maneja la ruta 404 para endpoints inexistentes

🛠️ Uso de la API
🔐 Autenticación
POST /auth/login
Autentica al usuario y devuelve un token JWT.

Body esperado (JSON):

json
Copiar
Editar
{
  "email": "alanleonelmaciel@gmail.com",
  "password": "1234"
}
Respuesta exitosa:

json
Copiar
Editar
{
  "token": "Bearer eyJhbGciOiJIUzI1NiIs..."
}
📦 Rutas de Productos
GET /api/products
Obtiene todos los productos.

GET /api/products/:id
Obtiene un producto por ID.

POST /api/products/create
Crea un nuevo producto.

Body esperado (JSON):

json
Copiar
Editar
{
  "name": "Producto ejemplo",
  "price": 1000,
  "description": "Descripción del producto"
}
Autenticación: se requiere enviar el token JWT en el encabezado Authorization.

DELETE /api/products/:id
Elimina un producto por ID.

Autenticación: se requiere token JWT.

❌ Rutas Desconocidas
Las rutas no definidas devuelven:

json
Copiar
Editar
{
  "error": "Ruta no encontrada"
}
con estado HTTP 404.

🧑‍💻 Autor
Alan Leonel Maciel

Email: alanleonelmaciel@gmail.com
