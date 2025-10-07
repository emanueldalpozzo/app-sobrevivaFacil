// Dentro de data/tasks.ts

export interface Task {
    id: string;
    text: string;
    details: string;
  }
  
  export interface TaskSection {
    title: string;
    data: Task[];
  }
  
  export const TASKS_DATA: TaskSection[] = [
    {
      title: 'Tarefas Semanais',
      data: [
        {
          id: '1',
          text: 'Trocar lençóis e toalhas',
          details: 'O ideal é trocar a roupa de cama e as toalhas de banho uma vez por semana para evitar o acúmulo de ácaros e bactérias.',
        },
        {
          id: '2',
          text: 'Limpar o banheiro',
          details: 'Faça uma limpeza completa no banheiro, incluindo vaso sanitário, pia e box, para manter a higiene.',
        },
        {
          id: '3',
          text: 'Verificar a geladeira',
          details: 'Jogue fora alimentos vencidos ou estragados e faça uma lista de compras para a semana.',
        },
      ],
    },
    {
      title: 'Tarefas Mensais',
      data: [
        {
          id: '4',
          text: 'Limpar janelas e espelhos',
          details: 'Uma limpeza mensal garante que as janelas e espelhos fiquem sem manchas e marcas de dedo.',
        },
        {
          id: '5',
          text: 'Limpar interior de armários e gavetas',
          details: 'Aproveite para reorganizar e limpar o interior dos armários da cozinha e do quarto.',
        },
      ],
    },
  ];