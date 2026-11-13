// src/components/organisms/CountryGrid.tsx
import type { JSX } from 'react';
import { CountryCard } from '../molecules/CountryCard';
import type { Country } from '../../types/country';

export interface CountryGridProps {
    countries: Country[];
}

export function CountryGrid({ countries }: CountryGridProps): JSX.Element {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {countries.map((country, index) => {
            const key =
            country.code ||
            country.codes?.cca3 ||
            country.codes?.cca2 ||
            `${country.names.common}-${index}`;

            return <CountryCard key={key} country={country} />;
        })}
        </div>
    );
}