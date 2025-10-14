module.exports = {
  testRunner: 'jest',
  runnerConfig: 'e2e/config.json',
  specs: 'e2e',
  configurations: {
    'android.emu.release': {
      device: {
        avdName: 'test',
        type: 'android.emulator',
        apiLevel: 30
      },
      app: 'android/app/build/outputs/apk/release/app-release.apk'
    }
  }
};
