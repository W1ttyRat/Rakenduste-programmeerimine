const path = require('node:path');
const taskService = require('../services/task.service');
const {
    loadTasks,
    saveTasks,
} = require('../repository/task.repository');

const defaultTasksFile = path.join(__dirname, '../data/tasks.json');

const tasksFile = process.env.TASKS_FILE ? path.resolve(process.env.TASKS_FILE) : defaultTasksFile;

const getAllTasks = async (req, res, next) => {
    try {
        const tasks = await loadTasks(tasksFile);
        const { completed } = req.query;

        if (completed === undefined) {
            return res.json(taskService.getAllTasks(tasks));
        }

        if (completed !== 'true' && completed !== 'false') {
            return res.status(400).json({
                error: 'Invalid completed query parameter. Use true or false.',
            });
        }

        if (completed === 'true') {
            return res.json(taskService.getCompletedTasks(tasks));
        }

        return res.json(
            tasks.filter((task) => task.completed === false),
        );
    } catch (error) {
        next(error);
    }
};

const getTaskById = async (req, res, next) => {
    try {
        const tasks = await loadTasks(tasksFile);
        const taskId = Number(req.params.id);
        const task = taskService.getTaskById(tasks, taskId);

        if (!task) {
            return res.status(404).json({
                error: 'Task not found',
            });
        }

        return res.json(task);
    } catch (error) {
        next(error);
    }
};

const addTask = async (req, res, next) => {
    try {
        const title = req.body?.title?.trim();

        if (!title) {
            return res.status(400).json({
                error: 'Title cannot be empty',
            });
        }

        const tasks = await loadTasks(tasksFile);

        const task = {
            id: tasks.length === 0
                ? 1
                : Math.max(...tasks.map((item) => item.id)) + 1,
            title,
            completed: false,
        };

        tasks.push(task);
        await saveTasks(tasksFile, tasks);

        return res.status(201).json(task);
    } catch (error) {
        next(error);
    }
};

const updateTask = async (req, res, next) => {
    try {
        const { title, completed } = req.body;
        const taskId = Number(req.params.id);
        const tasks = await loadTasks(tasksFile);
        const task = taskService.getTaskById(tasks, taskId);

        if (title === undefined && completed === undefined) {
            return res.status(400).json({
                error: 'Title or completed status is required',
            });
        }

        if (title !== undefined &&
            (typeof title !== 'string' || title.trim() === '')) {
            return res.status(400).json({
                error: 'Title must be a non-empty string',
            });
        }

        if (completed !== undefined &&
            typeof completed !== 'boolean') {
            return res.status(400).json({
                error: 'Completed must be a boolean',
            });
        }

        if (!task) {
            return res.status(404).json({
                error: 'Task not found',
            });
        }

        if (title !== undefined) {
            task.title = title.trim();
        }

        if (completed !== undefined) {
            task.completed = completed;
        }

        await saveTasks(tasksFile, tasks);

        return res.status(200).json(task);
    } catch (error) {
        next(error);
    }
};

const deleteTask = async (req, res, next) => {
    try {
        const taskId = Number(req.params.id);
        const tasks = await loadTasks(tasksFile);
        const taskIndex = tasks.findIndex((task) => task.id === taskId);

        if (taskIndex === -1) {
            return res.status(404).json({
                error: 'Task not found',
            });
        }

        tasks.splice(taskIndex, 1);
        await saveTasks(tasksFile, tasks);

        return res.status(204).send();
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllTasks,
    getTaskById,
    addTask,
    updateTask,
    deleteTask,
};