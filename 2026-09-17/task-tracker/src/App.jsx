import { useState } from 'react';
import { TaskForm } from './TaskForm';
export default function App() {
  const [tasks, setTasks] = useState([]);

  // See on funktsioon, mida TaskForm ootab
  async function handleAddTask(trimmedTitle) {
    const response = await fetch('http://localhost:3000/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: trimmedTitle,
      }),
    });

    if (!response.ok) {
      throw new Error('Ülesande lisamine ebaõnnestus');
    }

    const createdTask = await response.json();

    setTasks((currentTasks) => [...currentTasks, createdTask]);
  }

  return (
    <div>
      <TaskForm onAddTask={handleAddTask} />

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}