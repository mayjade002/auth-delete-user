auth-delete-user

Microservicio para la eliminación de usuarios en el sistema ReservaBnb. Utiliza Node.js con Express y MySQL mediante Sequelize.

🚀 Requisitos previos

Antes de ejecutar este servicio, asegúrate de tener instalado:

Node.js y npm

Docker (opcional para ejecución en contenedor)

Base de datos MySQL configurada

📦 Instalación

Clonar el repositorio:

git clone <URL_DEL_REPOSITORIO>
cd auth-delete-user

Instalar dependencias:

npm install

Configurar las variables de entorno en un archivo .env:

DB_NAME=reservaBnb
DB_USER=admin
DB_PASS=TuContraseñaSegura
DB_HOST=13.216.167.191
PORT=5000

🚀 Uso

Iniciar el servidor en modo desarrollo:

npm start

Eliminar un usuario (ejemplo con cURL):

curl -X DELETE http://localhost:5000/api/users/{id} \
     -H "Content-Type: application/json"

📦 Ejecución con Docker

Construir la imagen:

docker build -t auth-delete-user .

Ejecutar el contenedor:

docker run -p 5000:5000 --env-file .env auth-delete-user

📌 Endpoints

DELETE /api/users/:id → Elimina un usuario por ID.

🛠 Tecnologías

Node.js

Express

Sequelize

MySQL

📜 Licencia

Este proyecto está bajo la licencia ISC.

