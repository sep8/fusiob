const base = require('../../jest.config.base');
const packageJson = require('./package');

module.exports = {
    ...base,
    testEnvironment: 'node',
    name: packageJson.name,
    displayName: packageJson.name,
};