import { computeScores } from '../scoring';

describe('computeScores', () => {
  it('donne le bon archétype principal', () => {
    const answers = [
      { questionId: 1, optionId: 'A' },
      { questionId: 2, optionId: 'A' },
      { questionId: 3, optionId: 'A' },
      { questionId: 4, optionId: 'A' },
    ];
    const result = computeScores(answers);
    expect(result.main).toBeDefined();
    expect(result.scores[result.main]).toBeGreaterThan(0);
  });

  it('résout une égalité avec tie-breaker', () => {
    const answers = [
      { questionId: 1, optionId: 'A' },
      { questionId: 2, optionId: 'D' },
    ];
    const result = computeScores(answers);
    expect(['Chronomancien', 'Elementaliste']).toContain(result.main);
  });

  it('retourne 0% si aucune réponse', () => {
    const result = computeScores([]);
    expect(result.scores[result.main] || 0).toBe(0);
    expect(result.percentages[result.main] || 0).toBe(0);
  });

  it('gère une réponse non trouvée', () => {
    const answers = [
      { questionId: 999, optionId: 'X' },
    ];
    const result = computeScores(answers);
    expect(result.scores[result.main]).toBe(0);
  });
});
