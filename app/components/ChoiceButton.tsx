
import React from 'react';
import { Pressable, Text, StyleSheet, useColorScheme } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import { lightTheme, darkTheme } from '../theme';

interface ChoiceButtonProps {
  text: string;
  selected: boolean;
  onPress: () => void;
  accessibilityLabel: string;
}

export const ChoiceButton: React.FC<ChoiceButtonProps> = ({ text, selected, onPress, accessibilityLabel }) => (
  <Animated.View entering={FadeIn}>
    <ChoiceButtonInner text={text} selected={selected} onPress={onPress} accessibilityLabel={accessibilityLabel} />
  </Animated.View>
);

const ChoiceButtonInner: React.FC<ChoiceButtonProps> = ({ text, selected, onPress, accessibilityLabel }) => {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? darkTheme : lightTheme;
  return (
    <Pressable
      style={[styles.button, { backgroundColor: theme.card, borderColor: theme.secondary }, selected && { backgroundColor: theme.primary, borderColor: theme.accent }]}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityState={{ selected }}
      accessibilityLabel={accessibilityLabel}
    >
      <Text style={[styles.text, { color: theme.text, fontFamily: theme.fontFamily }, selected && { color: theme.huffle, fontWeight: 'bold' }]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginVertical: 8,
    alignItems: 'center',
    minHeight: 44,
  },
  text: {
    fontWeight: '600',
    fontSize: 16,
  },
});
