import { useState, type JSX, type ReactNode } from 'react';
import { SearchBar } from '../molecules/SearchBar';
import { RegionFilter } from '../molecules/RegionFilter';

export interface HeaderProps {
    query: string;
    region: string;
    onQueryChange: (query: string) => void;
    onRegionChange: (region: string) => void;
    onClearFilters: () => void;
    children?: ReactNode;
}

export function Header({
    query,
    region,
    onQueryChange,
    onRegionChange,
    onClearFilters,
    children,
}: HeaderProps): JSX.Element {
const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
const showClearButton = query !== '' || region !== '';

const toggleMenu = (): void => {
setIsMenuOpen((prev) => !prev);
};

return (
<header className="px-6 py-4 sm:px-8 sm:py-6 border-b border-slate-200/50 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
    <div className="flex items-center justify-between mb-4 sm:mb-6 max-w-7xl mx-auto">
    <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
        Booking or browsing?
    </h1>

    <div className="hidden md:flex items-center">
        {children}
    </div>

    <button
        type="button"
        onClick={toggleMenu}
        className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
        aria-label="Abrir menú de navegación"
    >
        {isMenuOpen ? (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
        ) : (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        )}
    </button>
    </div>

    {isMenuOpen && (
    <div className="md:hidden mb-4 pb-4 border-b border-slate-200 dark:border-slate-800 flex flex-col gap-3">
        {children}
    </div>
    )}

    <div className="flex flex-col sm:flex-row gap-4 max-w-7xl mx-auto">
    <SearchBar query={query} onQueryChange={onQueryChange} />
    
    <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-end">
        <RegionFilter region={region} onRegionChange={onRegionChange} />

        {showClearButton && (
        <button
            type="button"
            onClick={onClearFilters}
            className="px-5 py-3 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold transition-colors cursor-pointer text-center"
        >
            Limpiar filtros
        </button>
        )}
    </div>
    </div>
</header>
);
}