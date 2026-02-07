export default {
  expo: {
    name: "frontendMobile",
    slug: "frontendMobile",
    version: "1.0.0",
    orientation: "portrait",
    scheme: "frontendmobile",
    userInterfaceStyle: "automatic",
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.anonymous.frontendMobile",
    },
    android: {
      edgeToEdgeEnabled: true,
      predictiveBackGestureEnabled: false,
      package: "com.anonymous.frontendMobile",
    },
    web: {
      output: "static",
    },
    plugins: [
      "expo-router",
      "expo-font",
      "expo-web-browser",
    ],
    extra: {
      googleApiKey: "AIzaSyDMmQfaInIdzsyQWUQhA40D7n6Bhrfr8qw",
    },
  },
};