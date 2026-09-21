import { useState } from 'react';
import './App.css';

export function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [error, setError] = useState(false);

  function handleSubmit(event) {
    // vältib lehe värskendamist, kui vorm esitatakse
    event.preventDefault();

    // Eemaldame tühikud algusest ja lõpust
    const trimmedTitle = title.trim();

    // Kui pealkiri on tühi või koosneb ainult tühikutest, näita veateadet
    if (!trimmedTitle) {
      setError(true);
      return;
    }

    // Eduka esitamise korral lähtesta viga, kutsu tagasihelistusfunktsioon ja tühjenda sisend
    setError(false);
    onAddTask(trimmedTitle);
    setTitle('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="task-title-input">Sisesta ülesanne: </label>
        <input
          id="task-title-input"
          type="text"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
            if (error) setError(false); // Peida veateade, kui kasutaja hakkab uuesti kirjutama
          }}
          placeholder="Sisesta ülesanne..."
        />
      </div>

      {error && (
        <p style={{ color: 'red' }}>Pealkiri ei tohi olla tühi ega koosneda ainult tühikutest!</p>
      )}

      <button type="submit">Lisa ülesanne</button>
    </form>
  );
}

export default TaskForm;
