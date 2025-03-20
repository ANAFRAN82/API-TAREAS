const TaskService = require("../services/taskService");

const createTask = async (req, res) => {
    const task = await TaskService.createTask(req.body);
    res.json(task);
};

const getAllTasks = async (req, res) => {
    const tasks = await TaskService.getAllTasks();
    res.json(tasks);
};


const getCompletedTasks = async (req, res) => {
    const tasks = await TaskService.getCompletedTasks();
    res.json(tasks);
};

const getPendingTasks = async (req, res) => {
    const tasks = await TaskService.getPendingTasks();
    res.json(tasks);
};

const updateTask = async (req, res) => {
    const updatedTask = await TaskService.updateTask(req.params.id, req.body);
    if (!updatedTask) {
        return res.status(404).json({ message: "Tarea no encontrada para actualizar" });
    }
    res.json(updatedTask);
};

const deleteTask = async (req, res) => {
    const deletedTask = await TaskService.deleteTask(req.params.id);
    if (!deletedTask) {
        return res.status(404).json({ message: "Tarea no encontrada para eliminar" });
    }
    res.json({ message: 'Tarea eliminada' });
};

module.exports = { 
    createTask, 
    getAllTasks, 
    getCompletedTasks, 
    getPendingTasks, 
    updateTask, 
    deleteTask 
};
