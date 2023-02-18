const { defaults: tsjPreset } = require("ts-jest/presets")

module.exports = {
  ...tsjPreset,
  preset: "react-native",
  // projects: {

  // },
  globals: {
    "ts-jest": {
      babelConfig: true,
    },
  },
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)",

    //   "<rootDir>/node_modules/(?!((jest-)?react-native|react-clone-referenced-element|@react-native(-community)?)|react-navigation|@react-navigation/.*|@unimodules/.*|@expo-google-fonts/.*|native-base|react-native-code-push|expo(nent)?|@expo(nent)?/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)",
  ],
  //     "node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)"

  testPathIgnorePatterns: ["<rootDir>/node_modules/", "/detox", "@react-native"],
  testEnvironment: "jsdom",
  // testEnvironment: "node",
  setupFiles: ["<rootDir>/test/setup.ts"],
}
