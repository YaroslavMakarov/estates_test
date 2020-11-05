// jest.config.ts
import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
    setupFilesAfterEnv: ["<rootDir>src/setupTest.ts"]
};
export default config;
