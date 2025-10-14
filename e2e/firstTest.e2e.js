describe('Sorcier Quiz E2E', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('parcourt 20 questions et affiche le résultat', async () => {
    await element(by.text('Commencer')).tap();
    for (let i = 0; i < 20; i++) {
      await element(by.label('Question suivante')).tap();
    }
    await expect(element(by.text('Résultat principal'))).toBeVisible();
  });
});
