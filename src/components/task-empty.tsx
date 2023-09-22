export function TaskEmpty(): JSX.Element {
  return (
    <div className="flex flex-col items-center gap-3 py-12 border-t rounded-lg border-zinc-700">
      <img src="/empty.svg" alt="lista vazia" />
      <p className="text-zinc-500">
        <span className="font-bold">
          Você ainda não tem tarefas cadastradas
        </span>{' '}
        <br /> Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  )
}
