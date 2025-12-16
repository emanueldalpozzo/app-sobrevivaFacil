import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.light.tint,
        headerShown: true, 
      }}>
      <Tabs.Screen
        name="index" 
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={28} color={color} />,
        }}
      />
      
      <Tabs.Screen
        name="rotina" 
        options={{
          title: 'Rotina',
          tabBarIcon: ({ color }) => <Ionicons name="calendar-outline" size={28} color={color} />,
        }}
      />   
      
      <Tabs.Screen
        name="dicas" 
        options={{
          title: 'Dicas',
          tabBarIcon: ({ color }) => <Ionicons name="bulb-outline" size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}