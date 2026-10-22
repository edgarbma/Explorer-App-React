// src/utils/filter.ts
import type { Country } from '../types/country';

export function filterCountries(
    countries: Country[],
    query: string,
    region: string
): Country[] {
    return countries.filter((country) => {
        const matchesQuery = country.names.common
        .toLowerCase()
        .includes(query.toLowerCase().trim());
        
        const matchesRegion = region === '' || country.region === region;

        return matchesQuery && matchesRegion;
    });
}