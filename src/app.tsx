import { Header } from '@/components/header'
import { TaskManager } from './components/task-manager'

export function App(): JSX.Element {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <TaskManager />
    </div>
  )
}
