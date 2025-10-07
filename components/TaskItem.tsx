// Dentro de components/TaskItem.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Task } from '../data/tasks';
import { useActionSheet } from '@expo/react-native-action-sheet'; // Importe o hook

interface TaskItemProps {
  task: Task;
}

export default function TaskItem({ task }: TaskItemProps) {
  const [isCompleted, setIsCompleted] = useState(false);
  const { showActionSheetWithOptions } = useActionSheet(); // Use o hook

  const toggleCompletion = () => {
    setIsCompleted(!isCompleted);
  };

  const openOptions = () => {
    const options = ['Marcar como Lembrete', 'Excluir Tarefa', 'Cancelar'];
    const destructiveButtonIndex = 1; // 'Excluir Tarefa'
    const cancelButtonIndex = 2; // 'Cancelar'

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (selectedIndex?: number) => {
        switch (selectedIndex) {
          case 0:
            // Lógica para "Marcar como Lembrete"
            Alert.alert('Lembrete', 'Lembrete para a tarefa foi adicionado!');
            break;

          case destructiveButtonIndex:
            // Lógica para "Excluir Tarefa"
            Alert.alert('Excluído', 'A tarefa foi excluída com sucesso.');
            break;

          case cancelButtonIndex:
            // Cancelar
            break;
        }
      }
    );
  };

  return (
    <View style={styles.wrapper}>
      <Link href={{ pathname: '/details/[id]', params: { id: task.id, title: task.text, details: task.details } }} asChild>
        <TouchableOpacity activeOpacity={0.7} style={styles.container}>
          <TouchableOpacity onPress={toggleCompletion} style={styles.checkButton}>
            <Ionicons
              name={isCompleted ? 'checkmark-circle' : 'ellipse-outline'}
              size={24}
              color={isCompleted ? '#2ECC71' : '#AAB8C2'}
            />
          </TouchableOpacity>
          <View style={styles.textContainer}>
            <Text style={[styles.text, isCompleted && styles.textCompleted]}>
              {task.text}
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={22} color="#AAB8C2" />
        </TouchableOpacity>
      </Link>
      {/* Botão de Opções que abre a ActionSheet */}
      <TouchableOpacity onPress={openOptions} style={styles.optionsButton}>
        <Ionicons name="ellipsis-horizontal" size={22} color="#657786" />
      </TouchableOpacity>
    </View>
  );
}

// ESTILOS ATUALIZADOS
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E1E8ED',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingLeft: 20,
  },
  checkButton: {
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    color: '#14171A',
  },
  textCompleted: {
    textDecorationLine: 'line-through',
    color: '#AAB8C2',
  },
  optionsButton: {
    padding: 15,
  },
});