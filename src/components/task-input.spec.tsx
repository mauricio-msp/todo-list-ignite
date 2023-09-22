import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'

import { TaskInput } from '@/components/task-input'

describe('TaskInput', () => {
  it('should render the component <TaskInput />', () => {
    const handleAddTask = vi.fn()

    render(<TaskInput onAddTask={handleAddTask} />)

    expect(
      screen.getByPlaceholderText(/Adicione uma nova tarefa/i),
    ).toBeInTheDocument()
    expect(screen.getByText(/Criar/i)).toBeInTheDocument()
  })

  it('should be able to write in the field', () => {
    const handleAddTask = vi.fn()

    render(<TaskInput onAddTask={handleAddTask} />)

    const inputElement: HTMLInputElement = screen.getByPlaceholderText(
      /Adicione uma nova tarefa/i,
    )

    fireEvent.change(inputElement, { target: { value: 'Beber água' } })

    expect(inputElement.value).toBe('Beber água')
  })

  it('should be able clear input after clicked add button', () => {
    const onAddTask = vi.fn()

    render(<TaskInput onAddTask={onAddTask} />)

    const inputElement: HTMLInputElement = screen.getByPlaceholderText(
      /Adicione uma nova tarefa/i,
    )
    const addButton = screen.getByRole('button')

    fireEvent.change(inputElement, { target: { value: 'Beber água' } })

    fireEvent.click(addButton)

    expect(inputElement.value).toBe('')
  })
})
