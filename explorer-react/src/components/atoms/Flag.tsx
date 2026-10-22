// src/components/atoms/Flag.tsx
import type { JSX } from 'react';

export interface FlagProps {
    src: string;
    alt: string;
}

export function Flag({ src, alt }: FlagProps): JSX.Element {
    return (
        <div className="h-48 w-full overflow-hidden rounded-t-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
        <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover"
            loading="lazy"
        />
        </div>
    );
}