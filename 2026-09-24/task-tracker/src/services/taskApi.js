const API_URL = 'http://localhost:3000/api';

export function getTasks() {
  return fetch(`${import.meta.env.BASE_URL}tasks.json`).then((response) => {
    if (!response.ok) {
      throw new Error('Failed to load tasks');
    }

    return response.json();
  });
}

export function createTask(title) {
  return fetch(`${API_URL}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title }),
  }).then((response) => {
    if (!response.ok) {
      throw new Error('Failed to create task');
    }

    return response.json();
  });
}
