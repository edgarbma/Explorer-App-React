import type { JSX, ReactNode } from 'react';
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
const showClearButton = query !== '' || region !== '';

return (
    <header className="px-8 py-6 border-b border-slate-200/50 dark:border-slate-800/50">
    <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
        Booking or browsing?
        </h1>
        {children}
    </div>

    <div className="flex flex-col sm:flex-row gap-4 max-w-7xl mx-auto">
        <SearchBar query={query} onQueryChange={onQueryChange} />
        
        <div className="flex flex-col sm:flex-row gap-2 items-end">
        <RegionFilter region={region} onRegionChange={onRegionChange} />

        {showClearButton && (
            <button
            type="button"
            onClick={onClearFilters}
            className="px-5 py-3 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
            >
            Limpiar filtros
            </button>
        )}
        </div>
    </div>
    </header>
);
}