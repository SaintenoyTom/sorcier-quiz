module.exports = {
  apps: {
    'android.release': {
      type: 'android.apk',
      binaryPath: 'app-release.apk'
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
