module.exports = {
  testPathIgnorePatterns: [
    '<rootDir>/dist/',
    '<rootDir>/node_modules/',
    '<rootDir>/.stryker-tmp/',
  ],
  verbose: true,
  watchPathIgnorePatterns: ['<rootDir>/node_modules/'],
  collectCoverage: true,
}
