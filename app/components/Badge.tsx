
import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { lightTheme, darkTheme } from '../theme';

interface BadgeProps {
  icon: string;
  label: string;
  unlocked: boolean;
}

export const Badge: React.FC<BadgeProps> = ({ icon, label, unlocked }) => {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? darkTheme : lightTheme;
  return (
    <View style={[styles.badge, { backgroundColor: unlocked ? theme.secondary : theme.card, borderColor: theme.primary, borderWidth: 2 }]}
      accessibilityLabel={label} accessibilityState={{ disabled: !unlocked }}>
      <Ionicons name={icon as any} size={32} color={unlocked ? theme.primary : theme.huffleAccent} />
      <Text style={[styles.label, { color: unlocked ? theme.text : theme.huffleAccent, fontFamily: theme.fontFamily }, !unlocked && styles.lockedLabel]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    alignItems: 'center',
    margin: 8,
    padding: 8,
    borderRadius: 12,
    minWidth: 60,
  },
  label: {
    marginTop: 4,
    fontSize: 12,
    textAlign: 'center',
  },
  lockedLabel: {
    opacity: 0.6,
  },
});
