import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

import { TaskItem } from '@/components/task-item'

const task = { id: 1, title: 'Beber água', isComplete: false }

describe('TaskItem', () => {
  it('should render the component <TaskItem />', () => {
    render(<TaskItem task={task} onToggle={vi.fn()} onDelete={vi.fn()} />)

    const inputCheckbox = screen.getByRole('checkbox')
    const paragraphTitle = screen.getByText(/Beber água/i)
    const deleteButton = screen.getByRole('button')

    expect(inputCheckbox).toBeInTheDocument()
    expect(paragraphTitle).toBeInTheDocument()
    expect(paragraphTitle).toHaveAttribute('data-checked', 'false')
    expect(deleteButton).toBeInTheDocument()
  })
})
