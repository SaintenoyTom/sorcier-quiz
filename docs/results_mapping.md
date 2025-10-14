# Mapping des résultats — Sorcier Quiz

## Table : chemins → résultats

### Élémentaliste
- Chemin 1 : Majorité de réponses A sur 20 questions
- Chemin 2 : 5+ réponses consécutives avec poids max Élémentaliste
- Chemin 3 : Score Élémentaliste > 60% et aucun autre archétype > 30%

### Alchimiste
- Chemin 1 : Majorité de réponses B
- Chemin 2 : 4+ réponses avec poids 3 pour Alchimiste
- Chemin 3 : Score Alchimiste > 75%

### Ombromancien
- Chemin 1 : Majorité de réponses C
- Chemin 2 : 3+ réponses d’affilée maximisant Ombromancien
- Chemin 3 : Score Ombromancien > 60% et Élémentaliste < 10%

### Chronomancien
- Chemin 1 : Majorité de réponses D
- Chemin 2 : 5+ réponses avec poids max Chronomancien
- Chemin 3 : Score Chronomancien > 70%

## Détail du tie-breaker

1. Si égalité de score, on regarde l’archétype ayant reçu le plus de poids max (3).
2. Si encore égalité, priorité : Chronomancien > Alchimiste > Ombromancien > Élémentaliste.

### Exemples d’égalité

- Élémentaliste 30, Chronomancien 30, mais Chronomancien a 4 réponses à poids 3 contre 2 pour Élémentaliste → Chronomancien gagne.
- Alchimiste 25, Ombromancien 25, même nombre de poids max → Alchimiste gagne (priorité).
