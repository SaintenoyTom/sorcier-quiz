// Pour les tests unitaires
export async function triggerHaptic(type: string) {
  if (type === 'selection') return Haptics.selectionAsync();
  return;
}
import * as Haptics from 'expo-haptics';

export function feedback(type: 'success' | 'error' | 'selection' = 'selection') {
  switch (type) {
    case 'success':
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      break;
    case 'error':
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      break;
    default:
      Haptics.selectionAsync();
  }
}
