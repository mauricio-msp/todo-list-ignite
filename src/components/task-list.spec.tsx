import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

import { TaskList } from '@/components/task-list'

const tasks = [
  { id: 1, title: 'Beber água', isComplete: false },
  { id: 2, title: 'Beber suco', isComplete: true },
]

describe('TaskList', () => {
  it('should be able render task lists', () => {
    render(
      <TaskList tasks={tasks} onToggleTask={vi.fn()} onDeleteTask={vi.fn()} />,
    )

    const [firstTask, secondTask] = screen.getAllByTestId(/task/i)

    const textFirstElement = firstTask.querySelector('p')
    const textSecondElement = secondTask.querySelector('p')

    expect(textFirstElement).toHaveTextContent('Beber água')
    expect(textFirstElement).toHaveAttribute('data-checked', 'false')

    expect(textSecondElement).toHaveTextContent('Beber suco')
    expect(textSecondElement).toHaveAttribute('data-checked', 'true')
  })

  it('should be able render task empty', () => {
    render(
      <TaskList tasks={[]} onToggleTask={vi.fn()} onDeleteTask={vi.fn()} />,
    )

    expect(screen.getByRole('img')).toHaveAttribute('src', '/empty.svg')
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'lista vazia')

    expect(
      screen.getByText(/Você ainda não tem tarefas cadastradas/i),
    ).toBeInTheDocument()

    expect(
      screen.getByText(/Crie tarefas e organize seus itens a fazer/i),
    ).toBeInTheDocument()
  })
})
