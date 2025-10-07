// Dentro de components/NavigationCard.tsx
import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Href } from 'expo-router';

interface NavCardProps {
  title: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
  href: Href;
}

export default function NavigationCard({ title, description, icon, href }: NavCardProps) {
  return (
    <Link href={href} asChild>
      <TouchableOpacity style={styles.card}>
        <Ionicons name={icon} size={32} color="#4A90E2" style={styles.icon} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    width: '100%',
    marginBottom: 20,
    // Sombra para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Sombra para Android
    elevation: 3,
  },
  icon: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#14171A',
  },
  description: {
    fontSize: 14,
    color: '#657786',
    marginTop: 4,
  },
});