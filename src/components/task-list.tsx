import { TaskEmpty } from '@/components/task-empty'
import { TaskItem } from '@/components/task-item'

import { type Task } from '@/types/tasks'

interface TaskListProps {
  tasks: Task[]
  onToggleTask: (id: number) => void
  onDeleteTask: (id: number) => void
}

export function TaskList({
  tasks,
  onToggleTask,
  onDeleteTask,
}: TaskListProps): JSX.Element {
  const allTasks = tasks.length
  const tasksCompleted = tasks.filter((task) => task.isComplete).length

  return (
    <div className="flex flex-col w-full gap-8">
      <div className="flex items-center justify-between">
        <p className="font-bold text-sky-500">
          Tarefas criadas{' '}
          <span className="px-3 ml-1 text-white rounded-full bg-zinc-700">
            {allTasks}
          </span>
        </p>
        <p className="font-bold text-indigo-400">
          Concluídas{' '}
          <span className="px-3 ml-1 text-white rounded-full bg-zinc-700">
            {allTasks ? (
              <>
                {tasksCompleted} de {allTasks}
              </>
            ) : (
              '0'
            )}
          </span>
        </p>
      </div>
      {tasks.length ? (
        <ul className="flex flex-col gap-3 list-none">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={onToggleTask}
              onDelete={onDeleteTask}
            />
          ))}
        </ul>
      ) : (
        <TaskEmpty />
      )}
    </div>
  )
}
