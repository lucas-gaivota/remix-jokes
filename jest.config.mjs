const fileRegex =
  "\\.(css|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$";

const config = {
    moduleDirectories: ['node_modules', '<rootDir>/'],
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testMatch: ['**/?(*.)+(spec|test).(js|ts)?(x)'],
    transform: {
        '^.+\\.js$': ['esbuild-jest'],
        '^.+\\.tsx?$': [
            'esbuild-jest',
            {
                sourcemap: true,
                loaders: {
                    '.test.ts': 'tsx',
                },
            },
        ],
    },
    moduleNameMapper: {
        [fileRegex]: "identity-obj-proxy",
      },
};
export default config;
