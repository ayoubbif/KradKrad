module.exports = {
  moduleDirectories: ["node_modules", "<rootDir>"],
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect",
    "<rootDir>/jest.setup.js",
  ],
  testEnvironment: "jsdom",
};
