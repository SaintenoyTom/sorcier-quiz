
import React from 'react';
import { View, Text, StyleSheet, Image, Pressable, useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { lightTheme, darkTheme } from '../theme';

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? darkTheme : lightTheme;
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}> 
      {/* <Image source={require('../../assets/wizard.png')} style={styles.illustration} accessibilityLabel="Illustration de sorcier" /> */}
      <Text style={[styles.title, { color: theme.primary, fontFamily: theme.fontFamily }]}>Quel sorcier es-tu ?</Text>
      <Pressable style={[styles.cta, { backgroundColor: theme.primary, borderColor: theme.secondary, borderWidth: 2 }]} onPress={() => navigation.navigate('Quiz')} accessibilityLabel="Commencer le quiz">
        <Text style={[styles.ctaText, { color: theme.secondary, fontFamily: theme.fontFamily }]}>Commencer</Text>
      </Pressable>
      <View style={styles.row}>
        <Pressable style={[styles.iconBtn, { backgroundColor: theme.card }]} onPress={() => navigation.navigate('History')} accessibilityLabel="Voir l'historique">
          <Ionicons name="time-outline" size={28} color={theme.secondary} />
        </Pressable>
        <Pressable style={[styles.iconBtn, { backgroundColor: theme.card }]} onPress={() => navigation.navigate('Settings')} accessibilityLabel="Paramètres">
          <Ionicons name="settings-outline" size={28} color={theme.secondary} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  illustration: { width: 180, height: 180, marginBottom: 24 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 32 },
  cta: { borderRadius: 16, paddingVertical: 16, paddingHorizontal: 40, marginBottom: 32 },
  ctaText: { fontSize: 20, fontWeight: 'bold' },
  row: { flexDirection: 'row', gap: 24 },
  iconBtn: { borderRadius: 12, padding: 12, marginHorizontal: 8, elevation: 2 },
});
