import type { JSX, ReactNode } from 'react';

export interface HeaderProps {
    children?: ReactNode;
}

export function Header({ children }: HeaderProps): JSX.Element {
    return (
        <header className="px-8 py-6 flex items-center justify-between border-b border-slate-200/50 dark:border-slate-800/50">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Booking or browsing?
        </h1>
        {children}
        </header>
    );
}
