export function getTasks() {
  return fetch(`${import.meta.env.BASE_URL}tasks.json`).then((response) => {
    if (!response.ok) {
      throw new Error('Failed to load tasks');
    }

    return response.json();
  });
}