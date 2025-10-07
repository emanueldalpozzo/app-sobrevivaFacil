// constants/Colors.ts

const tintColorLight = '#007BFF'; // Azul primário

export default {
  light: {
    text: '#11181C',
    background: '#f8f9fa', // Um cinza bem claro
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    primary: tintColorLight,
    secondary: '#E0F2FE', // Azul claro para botões secundários
    card: '#FFFFFF',
    separator: '#F0F0F0', // Cor do separador de listas
  },
  // O tema dark pode ser definido aqui no futuro
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: '#FFFFFF',
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: '#FFFFFF',
    primary: tintColorLight,
    secondary: '#3A3A3A',
    card: '#1C1E21',
    separator: '#2D2D2D',
  },
};