const express = require("express");
const cors = require("cors");
const { connectDB } = require("./data/config");
const taskRoutes = require("./routes/taskRoutes");

const PORT = 4001;

// Crear la instancia del servidor
const app = express();
app.use(cors());
app.use(express.json());

// Agregar la conexión a la base de datos antes de iniciar el servidor
connectDB().then(() => {
    app.use('/task', taskRoutes);

    app.listen(PORT, () => {
        console.log("Server running in http://localhost:" + PORT);
    });
}).catch(error => {
    console.error("Error al conectar con la base de datos", error);
});
