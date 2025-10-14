// Génère un label d’accessibilité pour un type et un texte
export function getAccessibilityLabel(type: string, text: string) {
  if (type === 'button') return `Bouton : ${text}`;
  if (type === 'option') return `Option : ${text}`;
  return text;
}
// Utilitaires d’accessibilité pour React Native
import { AccessibilityInfo, findNodeHandle } from 'react-native';

export function focusOn(ref: React.RefObject<any>) {
  const node = findNodeHandle(ref.current);
  if (node) AccessibilityInfo.setAccessibilityFocus(node);
}

export function announce(msg: string) {
  AccessibilityInfo.announceForAccessibility(msg);
}
