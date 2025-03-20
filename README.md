# API TAREAS

Descripción
Esta API proporciona funcionalidades de CRUD (Crear, Leer, Actualizar, Eliminar) para gestionar tareas. Está diseñada para ser utilizada en el backend de una aplicación con un frontend en React, permitiendo una integración sencilla y eficiente.
Funcionalidades

La API permite realizar las siguientes operaciones sobre las tareas:
- Crear Tareas: Permite agregar nuevas tareas al sistema.
- Buscar Todas las Tareas: Recupera todas las tareas almacenadas en la base de datos.
- Buscar Tareas por ID: Permite obtener una tarea específica utilizando su identificador único.
- Editar Tareas: Modifica los detalles de una tarea existente.
- Eliminar Tareas: Elimina una tarea de la base de datos.

Tecnologías
- Backend: Node.js, Express
- Base de Datos: MongoDB
- Frontend (Sugerido): React

Endpoints
1. Crear tarea

POST /api/tareas
- Crea una nueva tarea.
- Cuerpo de la solicitud:

    {
      "titulo": "Mi nueva tarea",
      "descripcion": "Descripción detallada de la tarea",
      "estado": "pendiente"
    }

2. Obtener todas las tareas

GET /api/tareas
 Devuelve una lista de todas las tareas.

3. Buscar tarea por ID
- GET /api/tareas/:id
- Recupera una tarea específica por su ID.

    Parámetros:
        id: ID único de la tarea.

4. Editar tarea

PUT /api/tareas/:id
ctualiza los detalles de una tarea existente.
    Cuerpo de la solicitud:

    {
      "titulo": "Nuevo título",
      "descripcion": "Descripción actualizada",
      "estado": "completada"
    }

5. Eliminar tarea

DELETE /api/tareas/:id
Elimina una tarea de la base de datos.
