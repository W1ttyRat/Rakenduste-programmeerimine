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

module.exports = {
    getAllTasks,
    getTaskById,
};