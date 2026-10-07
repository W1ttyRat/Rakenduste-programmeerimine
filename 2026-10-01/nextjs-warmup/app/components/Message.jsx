"use client";

import { useState } from "react";

export default function Message() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function loadMessage() {
    setError("");

    try {
      const response = await fetch("/api/message");

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();
      setMessage(data.message);
    } catch {
      setMessage("");
      setError("Could not load the server message.");
    }
  }

  return (
    <div>
      <label htmlFor="load-message">Load server message:</label>
      <button type="button" onClick={loadMessage}>
        Load
      </button>
      {message && <p>{message}</p>}
      {error && <p role="alert">{error}</p>}
    </div>
  );
}