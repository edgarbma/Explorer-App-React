// src/components/organisms/CountryGrid.tsx
import type { JSX } from 'react';
import type { Country } from '../../types/country';
import { CountryCard } from '../molecules/CountryCard';

export interface CountryGridProps {
    countries: Country[];
    onSelect: (code: string) => void;
}

export function CountryGrid({ countries, onSelect }: CountryGridProps): JSX.Element {
    return (
        <section 
        aria-label="Países de ejemplo" 
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
        {countries.map((country) => {
            const key = country.codes?.cca2 || country.codes?.cca3 || country.names.common;
            return (
            <CountryCard
                key={key}
                country={country}
                onSelect={onSelect}
            />
            );
        })}
        </section>
    );
}