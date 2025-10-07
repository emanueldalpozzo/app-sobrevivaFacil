// Dentro de app/_layout.tsx
import { Stack } from 'expo-router';
import { ActionSheetProvider } from '@expo/react-native-action-sheet'; // 1. Importe

export default function RootLayout() {
  return (
    // 2. Envolva tudo com o Provider
    <ActionSheetProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="details/[id]" options={{ presentation: 'modal' }}/>
      </Stack>
    </ActionSheetProvider>
  );
}