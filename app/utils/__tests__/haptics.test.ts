import { feedback } from '../haptics';
describe('feedback', () => {
  it('appelle notificationAsync pour success', () => {
    const spy = jest.spyOn(Haptics, 'notificationAsync').mockResolvedValue();
    feedback('success');
    expect(spy).toHaveBeenCalledWith(Haptics.NotificationFeedbackType.Success);
    spy.mockRestore();
  });
  it('appelle notificationAsync pour error', () => {
    const spy = jest.spyOn(Haptics, 'notificationAsync').mockResolvedValue();
    feedback('error');
    expect(spy).toHaveBeenCalledWith(Haptics.NotificationFeedbackType.Error);
    spy.mockRestore();
  });
  it('appelle selectionAsync pour default', () => {
    const spy = jest.spyOn(Haptics, 'selectionAsync').mockResolvedValue();
    feedback();
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});
import * as Haptics from 'expo-haptics';
import { triggerHaptic } from '../haptics';

describe('triggerHaptic', () => {
  it('appelle Haptics.selectionAsync', async () => {
    const spy = jest.spyOn(Haptics, 'selectionAsync').mockResolvedValue();
    await triggerHaptic('selection');
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  it('n’appelle rien pour type inconnu', async () => {
    const spy = jest.spyOn(Haptics, 'selectionAsync').mockResolvedValue();
    await triggerHaptic('unknown');
    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();
  });

  it('gère le type vide', async () => {
    const spy = jest.spyOn(Haptics, 'selectionAsync').mockResolvedValue();
    await triggerHaptic('');
    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();
  });
});
