// components/TarefaItem.tsx

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

type TarefaItemProps = {
  icon: string;
  title: string;
  frequency: string;
};

export default function TarefaItem({ icon, title, frequency }: TarefaItemProps) {
  const [isCompleted, setIsCompleted] = useState(false);

  const toggleCompletion = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <TouchableOpacity onPress={toggleCompletion} style={[styles.container, isCompleted && styles.containerCompleted]}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{icon}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.title, isCompleted && styles.textCompleted]}>{title}</Text>
        <Text style={[styles.frequency, isCompleted && styles.textCompleted]}>{frequency}</Text>
      </View>
      <Ionicons
        name={isCompleted ? 'checkmark-circle' : 'ellipse-outline'}
        size={24}
        color={isCompleted ? Colors.light.tint : Colors.light.icon}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.light.card,
    padding: 16,
    borderRadius: 12,
    // Sombra para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    // Sombra para Android
    elevation: 2,
  },
  containerCompleted: {
    backgroundColor: '#F0F8FF', // Um azul bem clarinho pra indicar sucesso
  },
  iconContainer: {
    backgroundColor: Colors.light.secondary,
    borderRadius: 8,
    padding: 8,
    marginRight: 16,
  },
  icon: {
    fontSize: 24,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.light.text,
  },
  frequency: {
    fontSize: 14,
    color: Colors.light.icon,
    marginTop: 2,
  },
  textCompleted: {
    textDecorationLine: 'line-through',
    color: Colors.light.icon,
  },
});