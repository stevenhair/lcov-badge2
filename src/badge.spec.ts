import { basic, basicColors } from 'badge-up2';

import { createBadge } from './badge';

jest.mock('badge-up2');

describe('Badge', () => {
    beforeEach(() => {
        (basic as jest.MockedFunction<typeof basic>).mockReturnValue('this is a badge');
    });

    describe('Creating badge', () => {
        test('it returns the badge contents', () => {
            const contents = createBadge('coverage', 12.34);
            expect(contents).toBe('this is a badge');
        });

        test.each([
            [basicColors.red, 0],
            [basicColors.red, 75],
            [basicColors.orange, 75.01],
            [basicColors.orange, 85],
            [basicColors.yellow, 85.01],
            [basicColors.yellow, 90],
            [basicColors.yellowgreen, 90.01],
            [basicColors.yellowgreen, 93],
            [basicColors.green, 93.01],
            [basicColors.green, 97],
            [basicColors.brightgreen, 97.01],
            [basicColors.brightgreen, 100],
        ])('the color is %s when the coverage is %s', (color, coverage) => {
            createBadge('abc123', coverage);
            expect(basic).toHaveBeenCalledWith('abc123', `${coverage}%`, color);
        });
    });
});
