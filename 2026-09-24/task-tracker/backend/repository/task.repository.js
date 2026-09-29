const fs = require('node:fs/promises');

async function loadTasks(filePath) {
    try {
        const text = await fs.readFile(filePath, 'utf8');
        const data = JSON.parse(text);

        if (!Array.isArray(data)) {
            throw new Error('Tasks file must contain a JSON array');
        }

        return data;
    } catch (error) {
        if (error.code === 'ENOENT') {
            return [];
        }

        if (error instanceof SyntaxError) {
            throw new Error('Tasks file contains invalid JSON');
        }

        throw error;
    }
}

async function saveTasks(filePath, tasks) {
    await fs.writeFile(
        filePath,
        JSON.stringify(tasks, null, 2),
        'utf8',
    );
}

module.exports = {
    loadTasks,
    saveTasks,
};