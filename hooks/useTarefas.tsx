import { useState } from 'react';

export type Tarefa = {
  id: string;
  icon: string;
  title: string;
  frequency: string;
  completed: boolean;
};

export function useTarefas(tarefasIniciais: Omit<Tarefa, 'completed'>[]) {
  const [tarefas, setTarefas] = useState<Tarefa[]>(
    tarefasIniciais.map(t => ({ ...t, completed: false }))
  );

  function alternarConclusao(id: string) {
    setTarefas(prev =>
      prev.map(t =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  }

  return {
    tarefas,
    alternarConclusao,
  };
}
