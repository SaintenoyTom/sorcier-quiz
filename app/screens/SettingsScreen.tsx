
import React from 'react';
import { View, Text, StyleSheet, Switch, Pressable, useColorScheme } from 'react-native';
import { lightTheme, darkTheme } from '../theme';

export const SettingsScreen: React.FC = () => {
  // TODO: lier à Zustand et AsyncStorage
  const [darkMode, setDarkMode] = React.useState(false);
  const [notif, setNotif] = React.useState(false);
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? darkTheme : lightTheme;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}> 
      <Text style={[styles.title, { color: theme.primary, fontFamily: theme.fontFamily }]}>Paramètres</Text>
      <View style={styles.row}>
        <Text style={[styles.label, { color: theme.text, fontFamily: theme.fontFamily }]}>Thème sombre</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} accessibilityLabel="Activer le thème sombre"
          trackColor={{ false: theme.huffleAccent, true: theme.primary }}
          thumbColor={darkMode ? theme.secondary : theme.huffle} />
      </View>
      <View style={styles.row}>
        <Text style={[styles.label, { color: theme.text, fontFamily: theme.fontFamily }]}>Rappel quotidien</Text>
        <Switch value={notif} onValueChange={setNotif} accessibilityLabel="Activer le rappel quotidien"
          trackColor={{ false: theme.huffleAccent, true: theme.accent }}
          thumbColor={notif ? theme.secondary : theme.huffle} />
      </View>
      <Pressable style={[styles.resetBtn, { backgroundColor: theme.card, borderColor: theme.secondary, borderWidth: 2 }]} accessibilityLabel="Réinitialiser les données">
        <Text style={[styles.resetText, { color: theme.primary, fontFamily: theme.fontFamily }]}>Réinitialiser les données</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 },
  label: { fontSize: 16 },
  resetBtn: { borderRadius: 10, padding: 12, marginTop: 32 },
  resetText: { fontWeight: 'bold', textAlign: 'center' },
});
