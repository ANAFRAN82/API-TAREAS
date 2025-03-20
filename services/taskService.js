const Task = require("../models/taskModels"); // Asegurar que el nombre del archivo sea correcto

const createTask = async (task) => {
    return await Task.create(task);
};

const getAllTasks = async () => {
    return await Task.find();
};

const getCompletedTasks = async () => {
    return await Task.find({ status: "completado" });
};

const getPendingTasks = async () => {
    return await Task.find({ status: "pendiente" });
};

const updateTask = async (id, taskData) => {
    return await Task.findByIdAndUpdate(id, taskData, { new: true });
};

const deleteTask = async (id) => {
    return await Task.findByIdAndDelete(id);
};

module.exports = {
    createTask,
    getAllTasks,
    getCompletedTasks,
    getPendingTasks,
    updateTask,
    deleteTask
};
