import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TarefaItem from '../TarefaItem';

describe('TarefaItem', () => {
  it('deve renderizar os dados corretamente', () => {
    const { getByText } = render(
      <TarefaItem
        icon="🧹"
        title="Limpar a casa"
        frequency="Semanal"
      />
    );

    expect(getByText('🧹')).toBeTruthy();
    expect(getByText('Limpar a casa')).toBeTruthy();
    expect(getByText('Semanal')).toBeTruthy();
  });

  it('deve chamar onPress ao ser pressionado', () => {
    const onPressMock = jest.fn();

    const { getByText } = render(
      <TarefaItem
        icon="📚"
        title="Estudar"
        frequency="Diariamente"
        onPress={onPressMock}
      />
    );

    fireEvent.press(getByText('Estudar'));

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
