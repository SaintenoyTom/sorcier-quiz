import { focusOn, announce } from '../accessibility';
import { AccessibilityInfo } from 'react-native';
describe('focusOn', () => {
  it('appelle setAccessibilityFocus si node existe', () => {
    const ref = { current: {} };
    const spyNode = jest.spyOn(require('react-native'), 'findNodeHandle').mockReturnValue(123);
    const spyFocus = jest.spyOn(AccessibilityInfo, 'setAccessibilityFocus').mockImplementation(() => {});
    focusOn(ref);
    expect(spyFocus).toHaveBeenCalledWith(123);
    spyNode.mockRestore();
    spyFocus.mockRestore();
  });
  it('n’appelle pas setAccessibilityFocus si node absent', () => {
    const ref = { current: {} };
    const spyNode = jest.spyOn(require('react-native'), 'findNodeHandle').mockReturnValue(null);
    const spyFocus = jest.spyOn(AccessibilityInfo, 'setAccessibilityFocus').mockImplementation(() => {});
    focusOn(ref);
    expect(spyFocus).not.toHaveBeenCalled();
    spyNode.mockRestore();
    spyFocus.mockRestore();
  });
});

describe('announce', () => {
  it('appelle announceForAccessibility', () => {
    const spy = jest.spyOn(AccessibilityInfo, 'announceForAccessibility').mockImplementation(() => {});
    announce('Coucou');
    expect(spy).toHaveBeenCalledWith('Coucou');
    spy.mockRestore();
  });
});
import { getAccessibilityLabel } from '../accessibility';

describe('getAccessibilityLabel', () => {
  it('retourne le label pour un bouton', () => {
    const label = getAccessibilityLabel('button', 'Valider');
    expect(label).toBe('Bouton : Valider');
  });

  it('retourne le label pour une option', () => {
    const label = getAccessibilityLabel('option', 'Feu');
    expect(label).toBe('Option : Feu');
  });

  it('retourne le texte brut pour type inconnu', () => {
    const label = getAccessibilityLabel('autre', 'Test');
    expect(label).toBe('Test');
  });
});
