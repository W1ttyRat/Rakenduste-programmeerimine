const taskService = require('../services/task.service');

const tasks = [
    { id: 1, title: 'something title 1', completed: false },
    { id: 2, title: 'anything title 2', completed: true },
];

const getAllTasks = (req, res) => {
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
};

const getTaskById = (req, res) => {
    const taskId = Number(req.params.id);
    const task = taskService.getTaskById(tasks, taskId);

    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }

    res.json(task);
};

const addTask = (req, res) => {
    if (!req.body.title) {
        return res.status(400).json({ error: 'Title is required' });
    }

    const trimmedTitle = req.body.title.trim();

    if (trimmedTitle.length === 0) {
        return res.status(400).json({ error: 'Title cannot be empty' });
    }

    const newTask = {
        id: tasks.length + 1,
        title: req.body.title,
        completed: false,
    };

    tasks.push(newTask);
    return res.status(201).json(newTask);
}

const updateTask = (req, res, next) => {
    const { title, completed } = req.body;

    try {

        if (title === undefined && completed === undefined) {
            return res.status(400).json({
                error: 'Title or completed status is required',
            });
        }

        if (title !== undefined) {
            if (typeof title !== 'string' || title.trim().length === 0) {
                return res.status(400).json({
                    error: 'Title must be a non-empty string',
                });
            }
        }

        if (completed !== undefined && typeof completed !== 'boolean') {
            return res.status(400).json({
                error: 'Completed must be a boolean',
            });
        }

        const taskId = Number(req.params.id);
        const task = taskService.getTaskById(tasks, taskId);

        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }

        if (title !== undefined) {
            task.title = title.trim();
        }

        if (completed !== undefined) {
            task.completed = completed;
        }

        return res.status(200).json(task);
    } catch (error) {
        next(error);
    }
};

const deleteTask = (req, res, next) => {
    try {
        if (!req.params.id) {
            return res.status(400).json({ error: 'Task ID is required' });
        }

        const taskId = Number(req.params.id);
        const taskIndex = tasks.findIndex((task) => task.id === taskId);

        if (taskIndex === -1) {
            return res.status(404).json({ error: 'Task not found' });
        }

        tasks.splice(taskIndex, 1);
        return res.status(204).send();
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllTasks,
    getTaskById,
    addTask,
    updateTask,
    deleteTask,
};