import express from 'express';
//import cors from 'cors';

const app = express();

//app.use(cors());
app.use(express.json());

let tasks = [];
let nextId = 1;

app.post('/api/tasks', (req, res) => {
  const { title } = req.body;

  if (typeof title !== 'string' || !title.trim()) {
    return res.status(400).json({
      error: 'Title must be a non-empty string',
    });
  }

  const task = {
    id: nextId++,
    title: title.trim(),
    completed: false,
  };

  tasks.push(task);

  res.status(201).json(task);
});

export default app;