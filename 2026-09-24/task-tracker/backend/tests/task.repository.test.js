const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const os = require('node:os');
const path = require('node:path');

const {
    loadTasks,
    saveTasks,
} = require('../repository/task.repository');

test('saves and loads tasks using a temporary file', async () => {
    const temporaryDirectory = await fs.mkdtemp(
        path.join(os.tmpdir(), 'task-tracker-'),
    );

    const filePath = path.join(
        temporaryDirectory,
        'tasks.json',
    );

    const originalTasks = [
        {
            id: 1,
            title: 'Learn Node.js',
            completed: false,
        },
        {
            id: 2,
            title: 'Write tests',
            completed: true,
        },
    ];

    try {
        await saveTasks(filePath, originalTasks);

        const loadedTasks = await loadTasks(filePath);

        assert.deepEqual(loadedTasks, originalTasks);
    } finally {
        await fs.rm(temporaryDirectory, {
            recursive: true,
            force: true,
        });
    }
});