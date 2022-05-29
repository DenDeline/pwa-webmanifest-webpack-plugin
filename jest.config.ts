import type { InitialOptionsTsJest } from 'ts-jest'

const configuration: InitialOptionsTsJest = {
  preset: 'ts-jest',
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'node',
}

export default configuration
