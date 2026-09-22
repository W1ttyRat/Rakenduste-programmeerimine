import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import { TaskCard } from './TaskCard.jsx';

const task = {
  id: 1,
  title: 'Learn React',
  description: 'Study components',
  completed: false,
};

function renderTaskCard(onToggle = vi.fn()) {
  return render(
    <MemoryRouter>
      <TaskCard task={task} onToggle={onToggle} onDelete={vi.fn()} />
    </MemoryRouter>
  );
}

describe('TaskCard', () => {
  it("calls onToggle once with the task's ID when clicked", () => {
    const onToggle = vi.fn();

    renderTaskCard(onToggle);

    const toggleButton = screen.getByRole('button', {
      name: /toggle status/i,
    });

    fireEvent.click(toggleButton);

    expect(onToggle).toHaveBeenCalledTimes(1);
    expect(onToggle).toHaveBeenCalledWith(1);
  });
});
