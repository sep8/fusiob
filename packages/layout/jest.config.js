const base = require('../../jest.config.base');
const packageJson = require('./package');

module.exports = {
    ...base,
    testEnvironment: 'jsdom',
    name: packageJson.name,
    displayName: packageJson.name,
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"]
};