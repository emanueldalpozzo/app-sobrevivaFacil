import { Stack } from 'expo-router';
import { ActionSheetProvider } from '@expo/react-native-action-sheet'; // 1. Importe

export default function RootLayout() {
  return (
    <ActionSheetProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ActionSheetProvider>
  );
}