import { type ChangeEvent, useState } from 'react'
import { PlusCircle } from 'lucide-react'

interface TaskInputProps {
  onAddTask: (title: string) => void
}

export function TaskInput({ onAddTask }: TaskInputProps): JSX.Element {
  const [title, setTitle] = useState<string>('')

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value)
  }

  return (
    <div className="flex gap-3">
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={title}
        onChange={handleInputChange}
        className="flex-1 px-4 py-3 text-white border rounded-lg bg-zinc-800 placeholder:text-zinc-500 placeholder:font-medium border-zinc-950 focus:outline-none focus:ring focus:ring-sky-300"
      />
      <button
        type="button"
        className="flex items-center gap-2 px-4 text-white transition-colors rounded-lg bg-sky-800 hover:bg-sky-600"
        onClick={() => {
          onAddTask(title)
          setTitle('')
        }}
        data-testid="add-button"
      >
        Criar
        <PlusCircle className="w-4 h-4" />
      </button>
    </div>
  )
}
