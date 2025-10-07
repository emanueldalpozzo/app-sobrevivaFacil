// app/(tabs)/dicas.tsx

import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, SafeAreaView, SectionList } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import { dicasEssenciais } from '@/constants/Data';
import Colors from '@/constants/Colors';

export default function DicasScreen() {
  const params = useLocalSearchParams<{ highlightedCategory?: string }>();
  const sectionListRef = useRef<SectionList>(null);

  useEffect(() => {
    if (params.highlightedCategory) {
      const categoryIndex = dicasEssenciais.findIndex(
        (section) => section.title === params.highlightedCategory
      );

      if (categoryIndex !== -1) {
        setTimeout(() => {
          sectionListRef.current?.scrollToLocation({
            sectionIndex: categoryIndex,
            itemIndex: 0,
            animated: true,
            viewOffset: 20
          });
        }, 300); // Pequeno delay para garantir que a lista renderizou
      }
    }
  }, [params.highlightedCategory]);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ 
          headerTitle: 'Dicas Essenciais',
          headerLargeTitle: true,
          headerStyle: { backgroundColor: Colors.light.background },
          headerShadowVisible: false,
      }} />
      <SectionList
        ref={sectionListRef}
        sections={dicasEssenciais}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <View style={styles.itemIconContainer}>
              <Text>{item.icon}</Text>
            </View>
            <Text style={styles.itemText}>{item.text}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
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
    paddingBottom: 24,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.light.text,
    marginTop: 24,
    marginBottom: 12,
    paddingHorizontal: 4,
  },
  itemContainer: {
    backgroundColor: Colors.light.card,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
  },
  itemIconContainer: {
    backgroundColor: Colors.light.secondary,
    borderRadius: 8,
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  itemText: {
    fontSize: 16,
    color: Colors.light.text,
    flex: 1, // Garante que o texto quebre a linha se for muito grande
  },
  separator: {
    height: 8,
  },
});