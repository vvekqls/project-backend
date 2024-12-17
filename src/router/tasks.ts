import express from 'express';
import { getAllTasks, getTaskById, createTask, deleteTask, updateTask } from '../controllers/tasks';

export default (router: express.Router) => {
  router.get('/tasks', getAllTasks);
  router.get('/task/:id', getTaskById)
  router.post('/tasks', createTask);
  router.put('/tasks/:id', updateTask);
  router.delete('/tasks/:id', deleteTask);
};
