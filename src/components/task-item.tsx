import { Trash2 } from 'lucide-react'
import { type Task } from '@/types/tasks'

interface TaskItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  task: Task
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

export function TaskItem({
  task,
  onToggle,
  onDelete,
  ...props
}: TaskItemProps): JSX.Element {
  return (
    <li
      data-testid={`task-${task.id}`}
      className="flex items-start gap-3 px-4 py-3 border rounded-lg bg-zinc-800 border-zinc-700"
      {...props}
    >
      <div className="relative">
        <input
          readOnly
          type="checkbox"
          className="w-4 h-4 mt-1 transition-all bg-transparent border rounded-full appearance-none cursor-pointer peer border-sky-500 hover:bg-sky-500/20 shrink-0 checked:bg-indigo-500 checked:border-0 checked:hover:bg-indigo-400"
          checked={task.isComplete}
          onChange={() => onToggle(task.id)}
        />
        <svg
          className="absolute inset-0 hidden w-4 h-4 mt-1 pointer-events-none stroke-white fill-none peer-checked:block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <p
        className="flex-1 text-white data-[checked=true]:line-through data-[checked=true]:text-zinc-400 transition-colors"
        data-checked={task.isComplete}
      >
        {task.title}
      </p>
      <button
        className="p-1 text-white transition-colors rounded enabled:hover:bg-zinc-700 enabled:hover:text-red-400 disabled:opacity-40 disabled:cursor-not-allowed"
        onClick={() => onDelete(task.id)}
        disabled={task.isComplete}
        data-testid="remove-button"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </li>
  )
}
