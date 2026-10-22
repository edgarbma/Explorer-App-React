import type { JSX } from 'react';

export interface BadgeProps {
    region: string;
}

export function Badge({ region }: BadgeProps): JSX.Element {
    return (
        <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800 dark:bg-blue-900/50 dark:text-blue-200">
        {region}
        </span>
    );
}