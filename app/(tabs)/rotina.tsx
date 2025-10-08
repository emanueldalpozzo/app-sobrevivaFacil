// app/(tabs)/rotina.tsx

import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Stack } from 'expo-router';
import TarefaItem from '@/components/TarefaItem';
import { tarefasDomesticas } from '@/constants/Data';
import Colors from '@/constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RotinaScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ 
          headerTitle: 'Tarefas Domésticas',
          headerLargeTitle: true,
          headerStyle: { backgroundColor: Colors.light.background },
          headerShadowVisible: false,
          headerSearchBarOptions: {
            placeholder: 'Pesquisar tarefa...'
          }
      }} />

      <FlatList
        data={tarefasDomesticas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TarefaItem icon={item.icon} title={item.title} frequency={item.frequency} />
        )}
        contentContainerStyle={styles.listContainer}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  separator: {
    height: 12,
  },
});