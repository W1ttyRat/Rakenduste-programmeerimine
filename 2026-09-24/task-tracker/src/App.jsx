import { useState, useEffect } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import Header from './Header.jsx';
import { createTask, getTasks } from './services/taskApi.js';
import { TaskCard } from './TaskCard.jsx';
import { TaskForm } from './TaskForm.jsx';
import './App.css';

export default function App() {
  const [filter, setFilter] = useState('all');
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isCurrent = true;

    getTasks()
      .then((loadedTasks) => {
        if (!isCurrent) return;

        setTasks(loadedTasks);
        setIsLoading(false);
      })
      .catch(() => {
        if (!isCurrent) return;

        setError('');
        setIsLoading(false);
      });

    return () => {
      isCurrent = false;
    };
  }, []);

  function toggleTask(id) {
    setTasks((currentTasks) =>
      currentTasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
    );
  }

  function deleteTask(id) {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  }

  async function handleAddTask(title) {
    try {
      const createdTask = await createTask(title);

      setTasks((currentTasks) => [...currentTasks, createdTask]);
    } catch (err) {
      console.error('Error creating task:', err);
    }
  }

  return (
    <div className="App">
      <Header />

      {isLoading && <p>Loading tasks...</p>}

      {error && <p>{error}</p>}

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
