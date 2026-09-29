const test = require('node:test');
const assert = require('node:assert/strict');
const request = require('supertest');
const app = require('../app');

test('GET returns tasks', async () => {
    const response = await request(app).get('/api/tasks');

    assert.equal(response.status, 200);
    assert.ok(Array.isArray(response.body));
});

test('POST creates a valid task', async () => {
    const response = await request(app)
        .post('/api/tasks')
        .send({ title: 'New task' });

    assert.equal(response.status, 201);
    assert.equal(response.body.title, 'New task');
    assert.ok(response.body.id);
});

test('POST rejects an empty title', async () => {
    const response = await request(app)
        .post('/api/tasks')
        .send({ title: '   ' });

    assert.equal(response.status, 400);
});

test('unknown task returns 404', async () => {
    const response = await request(app).get('/api/tasks/999');

    assert.equal(response.status, 404);
});

test('DELETE removes a task', async () => {
    const created = await request(app)
        .post('/api/tasks')
        .send({ title: 'Delete me' });

    const id = created.body.id;

    const deleted = await request(app).delete(`/api/tasks/${id}`);
    assert.equal(deleted.status, 204);
    assert.equal(deleted.text, '');

    const result = await request(app).get(`/api/tasks/${id}`);
    assert.equal(result.status, 404);
});