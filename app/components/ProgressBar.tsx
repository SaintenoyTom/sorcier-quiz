
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import { useColorScheme } from 'react-native';
import { lightTheme, darkTheme } from '../theme';

interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percent = Math.round((current / total) * 100);
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? darkTheme : lightTheme;
  return (
    <View style={[styles.container, { backgroundColor: theme.background, borderRadius: 8, padding: 4 }]}
      accessible accessibilityRole="progressbar" accessibilityValue={{ min: 0, max: total, now: current }}>
      <Text style={[styles.label, { color: theme.primary, fontFamily: theme.fontFamily }]}>{current}/{total}</Text>
      <View style={[styles.barBg, { backgroundColor: theme.border }]}> 
        <Animated.View
          entering={FadeIn}
          style={[styles.bar, { width: `${percent}%`, backgroundColor: theme.secondary }]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: 8 },
  label: { fontWeight: 'bold', marginBottom: 4 },
  barBg: { height: 12, borderRadius: 6, overflow: 'hidden' },
  bar: { height: 12, borderRadius: 6 },
});
