// Dentro de app/(tabs)/tasks.tsx
import React from 'react';
import { StyleSheet, View, Text, SectionList, SafeAreaView } from 'react-native';
import TaskItem from '@/components/TaskItem'; // Importando nosso novo componente
import { TASKS_DATA, Task } from '@/data/tasks'; // Importando nossos dados

export default function TasksScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList<Task>
        sections={TASKS_DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskItem task={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
        contentContainerStyle={styles.listContentContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F8FA',
  },
  listContentContainer: {
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#14171A',
    backgroundColor: '#F5F8FA',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },
});