const config = {
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!**/coverage/**",
    "!**/eslint/**",
    "!**/eslintrc/**",
    "!**/config/**",
    "!**/config/js",
    "!jest/config/**",
  ],
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/", "/.dist/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  moduleNameMapper: {
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
  },
};

module.exports = config;
