
import questions from '../../data/questions.json';
import archetypes from '../../data/archetypes.json';

export function computeScores(answers: { questionId: number; optionId: string }[]) {
  // Initialisation des scores
  const scores: Record<string, number> = {};
  Object.keys(archetypes).forEach((type) => (scores[type] = 0));

  // Calcul des scores
  answers.forEach(({ questionId, optionId }) => {
    const question = questions.find((q) => q.id === questionId);
    if (!question) return;
    const option = question.options.find((opt) => opt.id === optionId);
    if (!option) return;
    Object.entries(option.weights).forEach(([type, value]) => {
      scores[type] += value;
    });
  });

  // Calcul du total
  const total = Object.values(scores).reduce((a, b) => a + b, 0);

  // Détermination du type principal
  let main: string;
  if (total === 0) {
    main = Object.keys(scores)[0];
    const percentages: Record<string, number> = {};
    Object.keys(scores).forEach(type => { percentages[type] = 0; });
    return { main, percentages, scores };
  }
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  main = sorted[0][0];
  const percentages: Record<string, number> = {};
  Object.entries(scores).forEach(([type, value]) => {
    percentages[type] = Math.round((value / total) * 100);
  });
  return { main, percentages, scores };
}
