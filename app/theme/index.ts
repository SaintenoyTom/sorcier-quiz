
import { Appearance } from 'react-native';

// Couleurs inspirées Harry Potter (maisons, parchemin, doré, etc.)
export const lightTheme = {
  background: '#FDF6E3', // parchemin
  card: '#FFF8DC', // beige clair
  primary: '#740001', // Gryffondor bordeaux
  secondary: '#D3A625', // Gryffondor doré
  accent: '#2A623D', // Serpentard vert
  raven: '#222F5B', // Serdaigle bleu
  bronze: '#B08D57', // Serdaigle bronze
  huffle: '#FFF4B1', // Poufsouffle jaune
  huffleAccent: '#60605C', // Poufsouffle gris
  text: '#3C2F1C', // marron foncé
  border: '#C2B280', // doré pâle
  fontFamily: 'Cochin', // typographie magique
};

export const darkTheme = {
  background: '#22212C', // nuit magique
  card: '#2A1A1F', // bordeaux sombre
  primary: '#D3A625', // doré Gryffondor
  secondary: '#740001', // bordeaux Gryffondor
  accent: '#2A623D', // vert Serpentard
  raven: '#222F5B', // bleu Serdaigle
  bronze: '#B08D57', // bronze Serdaigle
  huffle: '#FFF4B1', // jaune Poufsouffle
  huffleAccent: '#60605C', // gris Poufsouffle
  text: '#FDF6E3', // parchemin
  border: '#B08D57', // bronze
  fontFamily: 'Cochin',
};

export function getSystemTheme() {
  return Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme;
}
