module.exports = {
  apps: {
    'android.release': {
      type: 'android.apk',
      binaryPath: 'android/app/build/outputs/apk/release/app-release.apk',
      build: 'cd android && ./gradlew assembleRelease'
    }
  },
  configurations: {
    'android.emu.release': {
      device: {
        avdName: 'test',
        type: 'android.emulator',
        apiLevel: 30
      },
      app: 'android.release'
    }
  }
};
