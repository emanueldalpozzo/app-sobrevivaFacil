// app/(tabs)/_layout.tsx

import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.light.tint,
        headerShown: false, 
      }}>
      <Tabs.Screen
        name="index" // Corresponde ao arquivo index.tsx
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={28} color={color} />,
        }}
      />
      
      {/* 👇 GARANTA QUE ESTA PARTE EXISTA E ESTEJA CORRETA 👇 */}
      <Tabs.Screen
        name="rotina" // Corresponde ao arquivo rotina.tsx
        options={{
          title: 'Rotina',
          tabBarIcon: ({ color }) => <Ionicons name="calendar-outline" size={28} color={color} />,
        }}
      />
      {/* 👆 GARANTA QUE ESTA PARTE EXISTA E ESTEJA CORRETA 👆 */}
      
      <Tabs.Screen
        name="dicas" // Corresponde ao arquivo dicas.tsx
        options={{
          title: 'Dicas',
          tabBarIcon: ({ color }) => <Ionicons name="bulb-outline" size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}