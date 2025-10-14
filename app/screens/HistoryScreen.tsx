
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable, useColorScheme } from 'react-native';
import { lightTheme, darkTheme } from '../theme';

const initialHistory = [
  { date: '2025-10-12', type: 'Alchimiste', percent: 78 },
  { date: '2025-10-11', type: 'Ombromancien', percent: 62 },
];

export const HistoryScreen: React.FC = () => {
  const [history, setHistory] = useState(initialHistory);
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? darkTheme : lightTheme;

  const handleDelete = (index: number) => {
    setHistory(h => h.filter((_, i) => i !== index));
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}> 
      <Text style={[styles.title, { color: theme.primary, fontFamily: theme.fontFamily }]}>Historique des résultats</Text>
      <FlatList
        data={history}
        keyExtractor={item => item.date + item.type}
        renderItem={({ item, index }) => (
          <View style={[styles.item, { backgroundColor: theme.card, borderColor: theme.secondary, borderWidth: 2 }]}> 
            <Text style={[styles.date, { color: theme.text }]}>{item.date}</Text>
            <Text style={[styles.type, { color: theme.primary, fontWeight: 'bold', fontFamily: theme.fontFamily }]}>{item.type}</Text>
            <Text style={[styles.percent, { color: theme.text }]}>{item.percent}%</Text>
            <Pressable style={[styles.delete, { backgroundColor: theme.huffleAccent }]} onPress={() => handleDelete(index)}>
              <Text style={[styles.deleteText, { color: theme.primary, fontFamily: theme.fontFamily }]}>Supprimer</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  item: { flexDirection: 'row', alignItems: 'center', marginBottom: 12, borderRadius: 10, padding: 12 },
  date: { flex: 1 },
  type: { flex: 1 },
  percent: { flex: 1 },
  delete: { borderRadius: 8, padding: 6 },
  deleteText: { fontWeight: 'bold' },
});
