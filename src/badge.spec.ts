import { BadgeColor, createBadge } from './badge';

describe('Badge', () => {
    describe('Creating badge', () => {
        test.each([
            [BadgeColor.Red, 0],
            [BadgeColor.Red, 75],
            [BadgeColor.Orange, 75.01],
            [BadgeColor.Orange, 85],
            [BadgeColor.Yellow, 85.01],
            [BadgeColor.Yellow, 90],
            [BadgeColor.YellowGreen, 90.01],
            [BadgeColor.YellowGreen, 93],
            [BadgeColor.Green, 93.01],
            [BadgeColor.Green, 97],
            [BadgeColor.BrightGreen, 97.01],
            [BadgeColor.BrightGreen, 100],
        ])('the color is %s when the coverage is %s', (color, coverage) => {
            const expectedBadge = `<svg xmlns="http://www.w3.org/2000/svg" width="90" height="20"><linearGradient id="b" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><mask id="a"><rect width="90" height="20" rx="3" fill="#fff"/></mask><g mask="url(#a)"><path fill="#555" d="M0 0h62v20H0z"/><path fill="${color}" d="M62 0h28v20H62z"/><path fill="url(#b)" d="M0 0h90v20H0z"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,DejaVu Sans,Geneva,sans-serif" font-size="11"><text x="31" y="15" fill="#010101" fill-opacity=".3">abc123</text><text x="31" y="14">abc123</text><text x="75" y="15" fill="#010101" fill-opacity=".3">${coverage}%</text><text x="75" y="14">${coverage}%</text></g></svg>`;
            const badge = createBadge('abc123', coverage);
            expect(badge).toEqual(expectedBadge);
        });
    });
});
