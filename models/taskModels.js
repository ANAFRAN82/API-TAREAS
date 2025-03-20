const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    task: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    status: { type: String, required: true, enum: ["pendiente", "completado"], default: "pendiente" } // Se agregó el campo status
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
