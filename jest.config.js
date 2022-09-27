const nextJest = require('next/jest')

const createJestConfig = nextJest({
    dir: './',
})

const customJestConfig = {
    // collectCoverageFrom: [
    //     '**/*.{js,jsx,ts,tsx}',
    //     '!**/*.d.ts',
    //     '!**/node_modules/**',
    // ],
    // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    // moduleNameMapper: {
    //     // Handle module aliases (this will be automatically configured for you soon)
    //     '^@/components/(.*)$': '<rootDir>/components/$1',
    //
    //     '^@/pages/(.*)$': '<rootDir>/pages/$1',
    // },
        moduleDirectories: ["node_modules", "<rootDir>/"],
    testEnvironment: 'jest-environment-jsdom',
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)