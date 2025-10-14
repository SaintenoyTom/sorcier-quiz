const archetypes = require('../../data/archetypes.json');
const questions = require('../../data/questions.json');

function computeScores(answers) {
  const scores = { Elementaliste: 0, Alchimiste: 0, Ombromancien: 0, Chronomancien: 0 };
  const maxWeights = { Elementaliste: 0, Alchimiste: 0, Ombromancien: 0, Chronomancien: 0 };
  let total = 0;

  answers.forEach(({ questionId, optionId }) => {
    const q = questions.find(q => q.id === questionId);
    if (!q) return;
    const opt = q.options.find(o => o.id === optionId);
    if (!opt) return;
    Object.entries(opt.weights).forEach(([arch, w]) => {
      scores[arch] += w;
      if (w === 3) maxWeights[arch] += 1;
      total += w;
    });
  });

  const maxScore = Math.max(...Object.values(scores));
  const mainTypes = Object.entries(scores).filter(([_, v]) => v === maxScore).map(([k]) => k);

  let main = mainTypes[0];
  if (mainTypes.length > 1) {
    const maxMax = Math.max(...mainTypes.map(t => maxWeights[t]));
    const tie = mainTypes.filter(t => maxWeights[t] === maxMax);
    if (tie.length === 1) main = tie[0];
    else {
      const priority = ['Chronomancien', 'Alchimiste', 'Ombromancien', 'Elementaliste'];
      main = priority.find(p => tie.includes(p));
    }
  }

  const percentages = {
    Elementaliste: Math.round((scores.Elementaliste / total) * 100),
    Alchimiste: Math.round((scores.Alchimiste / total) * 100),
    Ombromancien: Math.round((scores.Ombromancien / total) * 100),
    Chronomancien: Math.round((scores.Chronomancien / total) * 100),
  };

  return { scores, percentages, main, tie: mainTypes.length > 1 ? mainTypes : undefined };
}

module.exports = { computeScores };
