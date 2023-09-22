import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'

import { TaskManager } from '@/components/task-manager'

describe('TaskManager', () => {
  it('should be able to add a task', async () => {
    render(<TaskManager />)

    const inputTask = screen.getByPlaceholderText('Adicione uma nova tarefa')
    const addButton = screen.getByTestId('add-button')

    fireEvent.change(inputTask, {
      target: {
        value: 'Desafio ReactJS Ignite',
      },
    })
    fireEvent.click(addButton)

    fireEvent.change(inputTask, {
      target: {
        value: 'Beber água',
      },
    })
    fireEvent.click(addButton)

    const firstTaskTitle = screen.getByText('Desafio ReactJS Ignite')
    const secondTaskTitle = screen.getByText('Beber água')

    expect(firstTaskTitle).toBeInTheDocument()
    expect(secondTaskTitle).toBeInTheDocument()

    expect(firstTaskTitle).toHaveTextContent('Desafio ReactJS Ignite')
    expect(secondTaskTitle).toHaveTextContent('Beber água')
  })

  it('should not be able to add a task with a empty title', () => {
    render(<TaskManager />)

    const addButton = screen.getByTestId('add-button')

    fireEvent.click(addButton)

    expect(screen.queryByTestId('task')).not.toBeInTheDocument()

    const inputTask = screen.getByPlaceholderText('Adicione uma nova tarefa')

    fireEvent.change(inputTask, {
      target: {
        value: 'Desafio ReactJS Ignite',
      },
    })
    fireEvent.click(addButton)

    const firstTask = screen.getByText('Desafio ReactJS Ignite')

    expect(firstTask).toBeInTheDocument()
    expect(firstTask).toHaveTextContent('Desafio ReactJS Ignite')
  })

  it('should be able to remove a task', async () => {
    render(<TaskManager />)

    const inputTask = screen.getByPlaceholderText('Adicione uma nova tarefa')
    const addButton = screen.getByTestId('add-button')

    fireEvent.change(inputTask, {
      target: {
        value: 'Desafio ReactJS Ignite',
      },
    })
    fireEvent.click(addButton)

    fireEvent.change(inputTask, {
      target: {
        value: 'Desafio NodeJS Ignite',
      },
    })
    fireEvent.click(addButton)

    const firstTaskTitle = screen.getByText('Desafio ReactJS Ignite')
    const secondTaskTitle = screen.getByText('Desafio NodeJS Ignite')

    expect(firstTaskTitle).toBeInTheDocument()
    expect(secondTaskTitle).toBeInTheDocument()

    const [firstTaskButtonRemove] = screen.getAllByTestId('remove-button')

    fireEvent.click(firstTaskButtonRemove)

    expect(firstTaskTitle).not.toBeInTheDocument()
    expect(secondTaskTitle).toBeInTheDocument()
  })

  it('should be able to check a task', () => {
    render(<TaskManager />)

    const inputTask = screen.getByPlaceholderText('Adicione uma nova tarefa')
    const addButton = screen.getByTestId('add-button')

    fireEvent.change(inputTask, {
      target: {
        value: 'Desafio ReactJS Ignite',
      },
    })
    fireEvent.click(addButton)

    fireEvent.change(inputTask, {
      target: {
        value: 'Desafio NodeJS Ignite',
      },
    })
    fireEvent.click(addButton)

    const [firstTask, secondTask] = screen.getAllByTestId(/task/i)

    // First task
    const inputCheckOfFirstTask: HTMLInputElement | null =
      firstTask.querySelector('input')
    const textOfFirstTask = firstTask.children[1]
    const deleteButtonOfFirstTask = firstTask.children[2]

    // Second task
    const inputCheckOfSecondTask: HTMLInputElement | null =
      secondTask.querySelector('input')
    const textOfSecondTask = secondTask.children[1]
    const deleteButtonOfSecondTask = secondTask.children[2]

    // Initial values of first task
    expect(inputCheckOfFirstTask?.checked).toBe(false)
    expect(textOfFirstTask).toHaveAttribute('data-checked', 'false')
    expect(deleteButtonOfFirstTask).not.toBeDisabled()

    // Initial values of second task
    expect(inputCheckOfSecondTask?.checked).toBe(false)
    expect(textOfSecondTask).toHaveAttribute('data-checked', 'false')
    expect(deleteButtonOfSecondTask).not.toBeDisabled()

    if (inputCheckOfFirstTask) fireEvent.click(inputCheckOfFirstTask)

    expect(firstTask).toBeInTheDocument()
    expect(secondTask).toBeInTheDocument()

    // After clicked input (first task) this is current values
    expect(inputCheckOfFirstTask?.checked).toBe(true)
    expect(textOfFirstTask).toHaveAttribute('data-checked', 'true')
    expect(deleteButtonOfFirstTask).toBeDisabled()

    expect(inputCheckOfSecondTask?.checked).toBe(false)
    expect(textOfSecondTask).toHaveAttribute('data-checked', 'false')
    expect(deleteButtonOfSecondTask).not.toBeDisabled()

    if (inputCheckOfSecondTask) fireEvent.click(inputCheckOfSecondTask)

    expect(inputCheckOfSecondTask?.checked).toBe(true)
    expect(textOfSecondTask).toHaveAttribute('data-checked', 'true')
    expect(deleteButtonOfSecondTask).toBeDisabled()
  })
})
