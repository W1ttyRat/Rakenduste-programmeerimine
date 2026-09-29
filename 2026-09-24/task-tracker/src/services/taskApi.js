const API_URL = 'http://localhost:3000/api';

async function request(url, options) {
  const response = await fetch(url, options);

  if (!response.ok) {
    const body = await response.json().catch(() => ({}));
    throw new Error(body.error || 'Request failed');
  }

  return response.status === 204 ? null : response.json();
}

export function getTasks() {
  return request(`${API_URL}/tasks`);
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
