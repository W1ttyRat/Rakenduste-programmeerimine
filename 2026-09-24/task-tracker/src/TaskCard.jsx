import { Link } from 'react-router-dom';

export function TaskCard({ task, onToggle, onDelete }) {
  const statusText = task.completed ? 'Completed' : 'Not completed';

  return (
    <article className={`task-card ${task.completed ? 'completed' : 'not-completed'}`}>
      <h2>
        <Link to={`/tasks/${task.id}`}>{task.title}</Link>
      </h2>

      <p>{task.description}</p>
      <p>{statusText}</p>

      <button onClick={() => onToggle(task.id)}>Toggle status</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </article>
  );
}
  