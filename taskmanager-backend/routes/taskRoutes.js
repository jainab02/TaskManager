// routes/taskRoutes.js
import { Router } from 'express';
import * as taskController from '../controllers/taskController.js'

const router = new Router();
router.post('/tasks', taskController.createTask);
router.get('/tasks', taskController.getAllTasks);
router.get('/tasks/:id', taskController.getTaskById);
router.put('/tasks/:id', taskController.updateTaskById);
router.delete('/tasks/:id', taskController.deleteTaskById);

export default router
