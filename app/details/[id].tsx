// Dentro de app/details/[id].tsx
import { Stack, useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DetailScreen() {
  const navigation = useNavigation();
  // Pegando TODOS os parâmetros enviados
  const { id, title, details } = useLocalSearchParams();

  // useEffect para atualizar o título da tela dinamicamente
  useEffect(() => {
    if (title) {
      navigation.setOptions({ title: title });
    }
  }, [navigation, title]);

  return (
    <View style={styles.container}>
      <Text style={styles.detailsText}>
        {details || 'Nenhum detalhe fornecido.'}
      </Text>
      <Text style={styles.idText}>
        ID da Tarefa: {id}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F8FA',
  },
  detailsText: {
    fontSize: 18,
    lineHeight: 26,
    color: '#14171A',
  },
  idText: {
    fontSize: 14,
    color: '#657786',
    marginTop: 20,
    fontStyle: 'italic',
  },
});