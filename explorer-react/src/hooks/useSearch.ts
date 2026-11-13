// src/hooks/useSearch.ts
import { useState } from 'react';
import { filterCountries } from '../utils/filter';
import type { Country } from '../types/country';

export interface UseSearchReturn {
    query: string;
    region: string;
    setQuery: (query: string) => void;
    setRegion: (region: string) => void;
    clearFilters: () => void;
    filteredCountries: Country[];
}

export function useSearch(countries: Country[]): UseSearchReturn {
    const [query, setQuery] = useState<string>('');
    const [region, setRegion] = useState<string>('');

    const filteredCountries = filterCountries(countries, query, region);

    const clearFilters = (): void => {
        setQuery('');
        setRegion('');
    };

    return {
        query,
        region,
        setQuery,
        setRegion,
        clearFilters,
        filteredCountries,
    };
}