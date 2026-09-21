import React from 'react'
import Header from './Header.jsx'
import { TaskCard } from './TaskCard.jsx'
import './App.css'

export default function App() {
  const tasks = [
    { title: 'Task 1', description: 'React, Vite and Creating Your First Application' },
    { title: 'Task 2', description: 'Git Workflow, Commit Conventions and Prettier' },
    { title: 'Task 3', description: 'JSX, Components and Basic Styling' }
  ]

  return (
    <div className="App">
      <Header />
      {tasks.map((task, index) => (
        <TaskCard key={index} task={task} />
      ))}
    </div>
  )
}
