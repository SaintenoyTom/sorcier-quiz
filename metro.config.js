const { getDefaultConfig } = require('expo/metro-config');
const config = getDefaultConfig(__dirname);

// Ne pas override config.serializer / transformer ici !
// export:embed d'Expo a besoin de son serializer JSON par défaut.

module.exports = config;