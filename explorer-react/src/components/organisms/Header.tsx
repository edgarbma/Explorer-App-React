import type { JSX, ReactNode } from 'react';

export interface HeaderProps {
    children: ReactNode;
}

export function Header({ children }: HeaderProps): JSX.Element {
    return (
        <header className="mb-8 border-b border-slate-200 pb-4 dark:border-slate-800">
        {children}
        </header>
    );
}
