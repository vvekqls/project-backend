
import { Request, Response } from 'express';
import prisma from '../libs/prismadb'

export const getAllTasks = async (req: Request, res: Response) => {

  try {
    const tasks = await prisma.task.findMany();
    res.status(200).json({ data: tasks })
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getTaskById = async (req: Request, res: any) => {
  const { id } = req.params;

  try {
    const task = await prisma.task.findUnique({
      where: { id: id },
    });

    if (!task) {
      return res.status(404).json({ message: 'Task was not found' });
    }

    res.status(200).json({ data: task })
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const createTask = async (req: Request, res: Response) => {
  try {
    const { title, color } = req.body;
    const task = await prisma.task.create({
      data: {
        title,
        color
      },
    });

    res.status(201).json({ data: task });
  } catch (e) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    const taskId = req.params.id;
    const taskData = req.body;

    const task = await prisma.task.update({
      where: {
        id: taskId,
      },
      data: taskData,
    });

    res.status(200).json({ data: task });
  } catch (e) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const taskId = req.params.id;
    await prisma.task.delete({
      where: {
        id: taskId,
      },
    });

    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (e) {
    res.status(500).json({ message: 'Internal server error' });
  }
};