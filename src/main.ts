import * as fs from 'fs/promises';

import { createBadge } from './badge';
import { processArguments } from './cli';
import { getCoverageLevel } from './coverage';

export async function generateBadge(filename: string, label = 'coverage'): Promise<string> {
    const input = (await fs.readFile(filename)).toString();
    const coverage = getCoverageLevel(input);
    return createBadge(label, coverage);
}

if (require.main === module) {
    const args = processArguments();
    generateBadge(args.input, args.label)
        .then(async (badge) => fs.writeFile(args.output, badge))
        .catch((e) => {
            console.error(e);
            process.exit(1);
        });
}
