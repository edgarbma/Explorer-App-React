import type { JSX, ChangeEvent } from 'react';

export interface SearchBarProps {
    query: string;
    onQueryChange: (query: string) => void;
}

export function SearchBar({ query, onQueryChange }: SearchBarProps): JSX.Element {
const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    onQueryChange(e.target.value);
};

return (
<div className="relative flex-1">
    <label htmlFor="search-input" className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">
        Buscar por país
    </label>
    <div className="relative">
        <svg
        className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500 pointer-events-none"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
            id="search-input"
            type="search"
            value={query}
            onChange={handleChange}
            placeholder="Look for..."
            className="w-full bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 rounded-full py-3 pl-11 pr-4 text-sm outline-none shadow-sm border border-transparent dark:border-slate-800 focus:border-slate-300 dark:focus:border-slate-700 transition-colors"
        />
    </div>
    </div>
    );
}