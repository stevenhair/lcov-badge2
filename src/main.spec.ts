import { spawnSync, SpawnSyncReturns } from 'child_process';
import { rm, stat, writeFile } from 'fs/promises';
import os from 'os';
import path from 'path';

import { createBadge } from './badge';
import { getCoverageLevel } from './coverage';
import { generateBadge } from './main';

jest.mock('./badge');
jest.mock('./coverage');

describe('Main', () => {
    let badgeContents: string;

    beforeEach(async () => {
        (getCoverageLevel as jest.MockedFunction<typeof getCoverageLevel>).mockReturnValue(99.5);
        (createBadge as jest.MockedFunction<typeof createBadge>).mockResolvedValue('totally an svg');

        badgeContents = await generateBadge('foo.lcov', 'something');
    });

    test('the main function generates the badge from the input', () => {
        expect(getCoverageLevel).toHaveBeenCalledWith('foo.lcov');
        expect(createBadge).toHaveBeenCalledWith('something', 99.5);
    });

    test('it returns the SVG as a string', () => {
        expect(badgeContents).toEqual('totally an svg');
    });

    describe('Running as a script', () => {
        const report = `
            TN:
            SF:src/badge.ts
            FN:3,getColor
            FN:19,createBadge
            FNF:2
            FNH:2
            FNDA:13,getColor
            FNDA:13,createBadge
            DA:1,2
            LF:15
            LH:15
            BRDA:4,0,0,2
            BRF:10
            BRH:10
            end_of_record`;
        let inputFilePath: string;
        let filePath: string;
        let result: SpawnSyncReturns<string>;

        beforeEach(async () => {
            const dir = os.tmpdir();
            filePath = path.join(dir, `badge-${new Date().valueOf()}.svg`);
            inputFilePath = path.join(dir, `lcov-${new Date().valueOf()}.info`);

            await writeFile(inputFilePath, report);

            result = spawnSync('ts-node', [path.join(__dirname, 'main.ts'), '-o', filePath, inputFilePath]);
        });

        afterEach(async () => {
            await rm(filePath);
            await rm(inputFilePath);
        });

        test('it exited successfully', () => {
            expect(result.status).toEqual(0);
        });

        test('it writes the badge file', async () => {
            await expect(stat(filePath)).resolves.not.toThrow();
        });
    });
});
