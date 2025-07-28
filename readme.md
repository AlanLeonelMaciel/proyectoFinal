# 📦 API de Productos

Una API RESTful para la gestión de productos, autenticación de usuarios y conexión segura con Firebase Firestore. Utiliza autenticación JWT y está diseñada para ser fácil de desplegar y escalar.

---

## 🚀 Instalación

1. **Clona este repositorio:**

   ```bash
   git clone https://github.com/AlanLeonelMaciel/proyectoFinal.git
   cd proyectoFinal
   ```

2. **Instala las dependencias:**

   ```bash
   npm install
   ```

   > **Dependencias principales:**
   > - [`express`](https://expressjs.com/) — Servidor web rápido y minimalista.
   > - [`cors`](https://www.npmjs.com/package/cors) — Habilita peticiones entre dominios.
   > - [`body-parser`](https://www.npmjs.com/package/body-parser) — Interpreta el cuerpo de las peticiones en JSON.
   > - [`dotenv`](https://www.npmjs.com/package/dotenv) — Gestión de variables de entorno.
   > - [`firebase`](https://firebase.google.com/docs/firestore) — Conexión con Firestore.
   > - [`jsonwebtoken`](https://www.npmjs.com/package/jsonwebtoken) — Autenticación con tokens JWT.

---

## ⚙️ Configuración

Crea un archivo `.env` en la raíz del proyecto con tus variables de entorno:

```env
apiKey=claveSecreta
authDomain=claveSecreta
projectId=claveSecreta
storageBucket=claveSecreta
messagingSenderId=claveSecreta
appId=claveSecreta
jwt_secret_key=claveSecreta
# ...otras variables si es necesario
```

---

## 🚦 Inicio del Servidor

El servidor principal se encuentra en `index.js`, donde se configura:

- **CORS** globalmente
- **Body-parser** para todas las rutas
- **Definición de rutas**
- **Manejo de errores (404)** para endpoints inexistentes

---

## 🛠️ Uso de la API

### 🔐 Autenticación

`POST /auth/login`

Autentica un usuario y devuelve un token JWT para acceder a rutas protegidas.

**Body esperado:**

```json
{
  "email": "alanleonelmaciel@gmail.com",
  "password": "1234"
}
```

**Respuesta exitosa:**

```json
{
  "token": "Bearer eyJhbGciOiJIUzI1NiIs..."
}
```

---

### 📦 Rutas de Productos

- **GET `/api/products`**  
  _Obtiene todos los productos._

- **GET `/api/products/:id`**  
  _Obtiene un producto por su ID._

- **POST `/api/products/create`**  
  _Crea un nuevo producto (requiere autenticación)._

  **Body esperado(ejemplo):**
  ```json
    {
        "price": 55,
        "description": "vaso de vidrio.",
        "stock": 30,
        "name": "vaso"
    }
  ```
  > Recuerda enviar el token JWT en el encabezado `Authorization`.

- **DELETE `/api/products/:id`**  
  _Elimina un producto por ID (requiere autenticación)._

---

### ❌ Rutas Desconocidas

Las rutas no definidas devuelven:

```json
{
  "error": "Ruta no encontrada"
}
```
con estado HTTP **404**.

---

## 🧑‍💻 Autor

**Alan Leonel Maciel**  
✉️ [alanleonelmaciel@gmail.com](mailto:alanleonelmaciel@gmail.com)

---

¡Gracias por usar esta API! Si tienes dudas o sugerencias, no dudes en contactarme.
