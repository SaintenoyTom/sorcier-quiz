
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useColorScheme } from 'react-native';
import { lightTheme, darkTheme } from '../theme';

interface Option {
  id: string;
  text: string;
}

interface QuestionCardProps {
  question: string;
  options: Option[];
  selectedId?: string;
  onSelect: (id: string) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question, options, selectedId, onSelect }) => {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? darkTheme : lightTheme;
  return (
    <View style={[styles.card, { backgroundColor: theme.background, borderColor: theme.secondary, borderWidth: 2 }]}
      accessible accessibilityRole="none" accessibilityLabel={question}>
      <Text style={[styles.question, { color: theme.primary, fontFamily: theme.fontFamily }]}>{question}</Text>
      {options.map(opt => (
        <View key={opt.id} style={styles.optionWrapper}>
          <Text
            style={[styles.optionText, { color: theme.text, fontFamily: theme.fontFamily }, selectedId === opt.id && { backgroundColor: theme.accent, color: theme.huffle, fontWeight: 'bold', borderColor: theme.secondary, borderWidth: 1 }]}
            accessibilityRole="radio"
            accessibilityState={{ selected: selectedId === opt.id }}
            accessibilityLabel={opt.text}
            onPress={() => onSelect(opt.id)}
          >
            {opt.text}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: 20,
    marginVertical: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  optionWrapper: {
    marginBottom: 8,
  },
  optionText: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
    borderWidth: 0,
  },
});
