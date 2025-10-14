
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useQuizStore } from '../store/useQuizStore';
import { View, Text, StyleSheet, Pressable, Vibration, useColorScheme } from 'react-native';
import { ProgressBar } from '../components/ProgressBar';
import { QuestionCard } from '../components/QuestionCard';
import questions from '../../data/questions.json';
import * as Haptics from 'expo-haptics';
import { lightTheme, darkTheme } from '../theme';

export const QuizScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const [current, setCurrent] = useState(1);
  const [selected, setSelected] = useState<string | undefined>();
  const total = questions.length;
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? darkTheme : lightTheme;

  const handleSelect = (id: string) => {
    setSelected(id);
    Haptics.selectionAsync();
  };

  const handleNext = () => {
    if (selected) {
      useQuizStore.getState().answer(q.id, selected);
    }
    if (current < total) {
      setCurrent(current + 1);
      setSelected(undefined);
    } else {
      navigation.navigate('Result');
    }
  };

  const q = questions[current - 1];

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}> 
      <ProgressBar current={current} total={total} />
      <QuestionCard
        question={q.text}
        options={q.options.map(o => ({ id: o.id, text: o.text }))}
        selectedId={selected}
        onSelect={handleSelect}
      />
      <Pressable
        style={[styles.nextBtn, { backgroundColor: selected ? theme.primary : theme.huffleAccent, borderColor: theme.secondary, borderWidth: 2 }, !selected && styles.nextBtnDisabled]}
        onPress={handleNext}
        disabled={!selected}
        accessibilityLabel="Question suivante"
      >
        <Text style={[styles.nextText, { color: selected ? theme.secondary : theme.huffle, fontFamily: theme.fontFamily }]}>Suivant</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  nextBtn: { borderRadius: 12, padding: 16, alignItems: 'center', marginTop: 24 },
  nextBtnDisabled: {},
  nextText: { fontWeight: 'bold', fontSize: 18 },
});
