import React from 'react';
import { View, Text, StyleSheet, Pressable, useColorScheme } from 'react-native';
import { Badge } from '../components/Badge';
import { useNavigation } from '@react-navigation/native';
import { useQuizStore } from '../store/useQuizStore';
import { computeScores } from '../utils/scoring';
import * as Sharing from 'expo-sharing';
import { lightTheme, darkTheme } from '../theme';

export const ResultScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const answers = useQuizStore(state => state.answers);
  const { main, percentages } = computeScores(answers);
  const percent = percentages[main];
  const archetypes = require('../../data/archetypes.json');
  const strengths = archetypes[main]?.strengths || [];
  const weaknesses = archetypes[main]?.weaknesses || [];
  const tips = archetypes[main]?.tips || [];
  const badges = archetypes[main]?.badges || [];
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? darkTheme : lightTheme;

  const handleRestart = () => {
    navigation.navigate('Home');
    useQuizStore.getState().reset();
  };
  const handleShare = async () => {
    alert('Partage à venir !');
  };
  const handleSave = () => {
    alert('Résultat sauvegardé !');
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}> 
      <View style={[styles.resultCard, { backgroundColor: theme.card, borderColor: theme.secondary, borderWidth: 2 }]}> 
        <Text style={[styles.title, { color: theme.primary, fontFamily: theme.fontFamily }]}>Résultat principal : {main}</Text>
        <Text style={[styles.percent, { color: theme.secondary, fontFamily: theme.fontFamily }]}>{percent}%</Text>
        <Text style={[styles.section, { color: theme.accent }]}>Forces :</Text>
        <Text style={[styles.text, { color: theme.text }]}>{strengths.join(', ')}</Text>
        <Text style={[styles.section, { color: theme.accent }]}>Faiblesses :</Text>
        <Text style={[styles.text, { color: theme.text }]}>{weaknesses.join(', ')}</Text>
        <Text style={[styles.section, { color: theme.accent }]}>Conseils :</Text>
        <Text style={[styles.text, { color: theme.text }]}>{tips.join(', ')}</Text>
        <View style={styles.badgesRow}>
          {badges.map((b: any) => <Badge key={b.label} {...b} />)}
        </View>
      </View>
      <View style={styles.row}>
        <Pressable style={[styles.btn, { backgroundColor: theme.primary, borderColor: theme.secondary, borderWidth: 2 }]} onPress={handleRestart}><Text style={[styles.btnText, { color: theme.secondary, fontFamily: theme.fontFamily }]}>Recommencer</Text></Pressable>
        <Pressable style={[styles.btn, { backgroundColor: theme.accent, borderColor: theme.secondary, borderWidth: 2 }]} onPress={handleShare}><Text style={[styles.btnText, { color: theme.huffle, fontFamily: theme.fontFamily }]}>Partager</Text></Pressable>
        <Pressable style={[styles.btn, { backgroundColor: theme.secondary, borderColor: theme.primary, borderWidth: 2 }]} onPress={handleSave}><Text style={[styles.btnText, { color: theme.primary, fontFamily: theme.fontFamily }]}>Sauvegarder</Text></Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  resultCard: { borderRadius: 18, padding: 20, marginBottom: 24, shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 8, elevation: 2 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  percent: { fontSize: 32, fontWeight: 'bold', marginBottom: 16 },
  section: { fontWeight: 'bold', marginTop: 12 },
  text: { fontSize: 16, marginBottom: 8 },
  badgesRow: { flexDirection: 'row', flexWrap: 'wrap', marginVertical: 12 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 24 },
  btn: { flex: 1, marginHorizontal: 4, borderRadius: 10, padding: 14, alignItems: 'center', minHeight: 48 },
  btnText: { fontWeight: 'bold', fontSize: 16 },
});