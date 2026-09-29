const getAllTasks = (tasks) => {
    return tasks;
};

const getTaskById = (tasks, id) => {
    return tasks.find((task) => task.id === id);
};

const getCompletedTasks = (tasks) => {
    return tasks.filter((task) => task.completed === true);
};

module.exports = {
    getAllTasks,
    getTaskById,
    getCompletedTasks,
};