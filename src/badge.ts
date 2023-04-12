// eslint-disable-next-line max-len
const badgeTemplate = '<svg xmlns="http://www.w3.org/2000/svg" width="90" height="20"><linearGradient id="b" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><mask id="a"><rect width="90" height="20" rx="3" fill="#fff"/></mask><g mask="url(#a)"><path fill="#555" d="M0 0h62v20H0z"/><path fill="{{color}}" d="M62 0h28v20H62z"/><path fill="url(#b)" d="M0 0h90v20H0z"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,DejaVu Sans,Geneva,sans-serif" font-size="11"><text x="31" y="15" fill="#010101" fill-opacity=".3">{{label}}</text><text x="31" y="14">{{label}}</text><text x="75" y="15" fill="#010101" fill-opacity=".3">{{value}}</text><text x="75" y="14">{{value}}</text></g></svg>\n'

export const enum BadgeColor {
    BrightGreen = '#4C1',
    Green = '#97CA00',
    Yellow = '#DFB317',
    YellowGreen = '#A4A61D',
    Orange = '#FE7D37',
    Red = '#E05D44',
}

function getColor(coverage: number): BadgeColor {
    if (coverage > 97) {
        return BadgeColor.BrightGreen;
    } else if (coverage > 93) {
        return BadgeColor.Green;
    } else if (coverage > 90) {
        return BadgeColor.YellowGreen;
    } else if (coverage > 85) {
        return BadgeColor.Yellow;
    } else if (coverage > 75) {
        return BadgeColor.Orange;
    } else {
        return BadgeColor.Red;
    }
}

export function createBadge(label: string, coverage: number): string {
    return badgeTemplate
        .replace(/{{label}}/g, label)
        .replace(/{{value}}/g, `${coverage}%`)
        .replace(/{{color}}/g, getColor(coverage))
        .trim();
}
