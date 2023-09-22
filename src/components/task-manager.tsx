import { useState } from 'react'

import { TaskList } from '@/components/task-list'
import { TaskInput } from '@/components/task-input'

import { type Task } from '@/types/tasks'

export function TaskManager(): JSX.Element {
  const [tasks, setTasks] = useState<Task[]>([])

  function handleAddTask(title: string): void {
    if (!title) return

    const task = {
      id: Math.floor(Math.random() * 1000),
      title,
      isComplete: false,
    }

    setTasks((prevTasks) => [...prevTasks, task])
  }

  function handleToggleTask(id: number): void {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, isComplete: !task.isComplete } : task,
    )

    setTasks(newTasks)
  }

  function handleDeleteTask(id: number): void {
    const newTasks = tasks.filter((task) => task.id !== id)

    setTasks(newTasks)
  }

  return (
    <main className="flex flex-col items-center flex-1 bg-zinc-900">
      <div className="flex flex-col w-full max-w-3xl gap-12 px-6 -mt-7 md:px-0">
        <TaskInput onAddTask={handleAddTask} />
        <TaskList
          tasks={tasks}
          onToggleTask={handleToggleTask}
          onDeleteTask={handleDeleteTask}
        />
      </div>
    </main>
  )
}
