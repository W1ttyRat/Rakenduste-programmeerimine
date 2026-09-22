import { useState } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import Header from './Header.jsx';
import { TaskCard } from './TaskCard.jsx';
import { TaskForm } from './TaskForm.jsx';
import './App.css';

export default function App() {
  const [filter, setFilter] = useState('all');
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Task 1',
      description: 'React, Vite and Creating Your First Application',
      completed: true,
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'Git Workflow, Commit Conventions and Prettier',
      completed: true,
    },
    {
      id: 3,
      title: 'Task 3',
      description: 'JSX, Components and Basic Styling',
      completed: true,
    },
    {
      id: 4,
      title: 'Task 4',
      description: 'Events, useState and Conditional Rendering',
      completed: true,
    },
    {
      id: 5,
      title: 'Task 5',
      description: 'Lists, Keys and Filtering',
      completed: true,
    },
    {
      id: 6,
      title: 'Task 6',
      description: 'Controlled Forms and Validation',
      completed: false,
    },
    {
      id: 7,
      title: 'Task 7',
      description: 'Shared State and Adding, Updating and Deleting Tasks',
      completed: false,
    },
    {
      id: 8,
      title: 'Task 8',
      description: 'React Router and Task Details',
      completed: false,
    },
  ]);

  function toggleTask(id) {
    setTasks((currentTasks) =>
      currentTasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
    );
  }

  function deleteTask(id) {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  }

  function handleAddTask(trimmedTitle) {
    setTasks((currentTasks) => {
      const nextId = currentTasks.reduce((maxId, task) => Math.max(maxId, task.id), 0) + 1;

      return [
        ...currentTasks,
        {
          id: nextId,
          title: trimmedTitle,
          description: 'New task description',
          completed: false,
        },
      ];
    });
  }

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/tasks"
          element={
            <TaskListPage
              tasks={tasks}
              filter={filter}
              setFilter={setFilter}
              onAddTask={handleAddTask}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          }
        />

        <Route path="/tasks/:taskId" element={<TaskDetailsPage tasks={tasks} />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

function HomePage() {
  return (
    <main>
      <h1>Welcome to Task Tracker</h1>
      <Link to="/tasks">View tasks</Link>
    </main>
  );
}

function TaskListPage({ tasks, filter, setFilter, onAddTask, onToggle, onDelete }) {
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  return (
    <main>
      <TaskForm onAddTask={onAddTask} />

      <div className="filters">
        <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>
          All tasks
        </button>

        <button
          onClick={() => setFilter('completed')}
          className={filter === 'completed' ? 'active' : ''}
        >
          Completed tasks
        </button>

        <button
          onClick={() => setFilter('incomplete')}
          className={filter === 'incomplete' ? 'active' : ''}
        >
          Incomplete tasks
        </button>
      </div>

      {filteredTasks.length === 0 ? (
        <p>No tasks found</p>
      ) : (
        filteredTasks.map((task) => (
          <TaskCard key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
        ))
      )}
    </main>
  );
}

function TaskDetailsPage({ tasks }) {
  const { taskId } = useParams();
  const task = tasks.find((currentTask) => currentTask.id === Number(taskId));

  if (!task) {
    return (
      <main>
        <h1>Task not found</h1>
        <p>No task exists with ID {taskId}.</p>
        <Link to="/tasks">Back to tasks</Link>
      </main>
    );
  }

  return (
    <main>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>{task.completed ? 'Completed' : 'Not completed'}</p>
      <Link to="/tasks">Back to tasks</Link>
    </main>
  );
}

function NotFoundPage() {
  return (
    <main>
      <h1>Page not found</h1>
      <Link to="/">Go home</Link>
    </main>
  );
}
