import { renderHook, act } from '@testing-library/react-native';
import { useTarefas } from '../useTarefas';

const tarefasMock = [
  { id: '1', icon: '🧹', title: 'Limpar casa', frequency: 'Semanal' },
];

describe('useTarefas', () => {
  it('deve iniciar tarefas como não concluídas', () => {
    const { result } = renderHook(() => useTarefas(tarefasMock));

    expect(result.current.tarefas[0].completed).toBe(false);
  });

  it('deve alternar o estado de conclusão da tarefa', () => {
    const { result } = renderHook(() => useTarefas(tarefasMock));

    act(() => {
      result.current.alternarConclusao('1');
    });

    expect(result.current.tarefas[0].completed).toBe(true);
  });
});
