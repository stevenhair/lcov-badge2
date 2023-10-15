import { basic, basicColors } from 'badge-up2';

function getColor(coverage: number): string {
    if (coverage > 97) {
        return basicColors.brightgreen;
    } else if (coverage > 93) {
        return basicColors.green;
    } else if (coverage > 90) {
        return basicColors.yellowgreen;
    } else if (coverage > 85) {
        return basicColors.yellow;
    } else if (coverage > 75) {
        return basicColors.orange;
    } else {
        return basicColors.red;
    }
}

export function createBadge(label: string, coverage: number): string {
    const color = getColor(coverage);
    return basic(label, `${coverage}%`, color);
}
