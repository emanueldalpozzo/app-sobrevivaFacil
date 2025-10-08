// app/(tabs)/index.tsx

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useActionSheet } from '@expo/react-native-action-sheet';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '@/constants/Colors';

export default function HomeScreen() {
  const router = useRouter();
  const { showActionSheetWithOptions } = useActionSheet();

  const handleOpenSettings = () => {
    const options = ['Sobre o App', 'Sugerir uma dica', 'Cancelar'];
    const cancelButtonIndex = 2;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        title: 'Opções',
      },
      (selectedIndex?: number) => {
        switch (selectedIndex) {
          case 0:
            alert('App desenvolvido para ajudar no início da vida adulta!');
            break;
          case 1:
            alert('Funcionalidade em desenvolvimento!');
            break;
        }
      }
    );
  };

  const navigateToDicas = (category: string) => {
    router.push({
      pathname: '/dicas',
      params: { highlightedCategory: category }
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Meu Lar</Text>
        <TouchableOpacity onPress={handleOpenSettings}>
          <Ionicons name="settings-outline" size={24} color={Colors.light.icon} />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Bem-vindo(a) ao seu novo lar!</Text>
        <Text style={styles.subtitle}>
          Prepare-se para uma jornada emocionante de independência e aprendizado. Aqui, você encontrará tudo o que precisa para transformar sua casa em um lar.
        </Text>

        <TouchableOpacity style={styles.buttonPrimary} onPress={() => router.push('/rotina')}>
          <Text style={styles.buttonTextPrimary}>Rotina</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.buttonSecondary} onPress={() => navigateToDicas('Economia')}>
          <Text style={styles.buttonTextSecondary}>Dicas</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.light.text,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 50, 
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.light.text,
    textAlign: 'left',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.light.icon,
    textAlign: 'left',
    marginBottom: 40,
    lineHeight: 24,
  },
  buttonPrimary: {
    backgroundColor: Colors.light.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  buttonTextPrimary: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  buttonSecondary: {
    backgroundColor: Colors.light.secondary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonTextSecondary: {
    color: Colors.light.primary,
    fontSize: 18,
    fontWeight: '600',
  },
});