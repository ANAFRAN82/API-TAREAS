const express = require("express");
const TaskController = require("../controller/taskController");

const router = express.Router();

router.post('/', TaskController.createTask);
router.get('/', TaskController.getAllTasks);
router.get('/completed', TaskController.getCompletedTasks);
router.get('/pending', TaskController.getPendingTasks);
router.put('/:id', TaskController.updateTask);
router.delete('/:id', TaskController.deleteTask);

module.exports = router;
