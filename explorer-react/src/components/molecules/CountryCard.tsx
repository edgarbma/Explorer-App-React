// src/components/molecules/CountryCard.tsx
import type { JSX } from 'react';
import type { Country } from '../../types/country';
import { formatPopulation } from '../../utils/formatPopulation';
import { Flag } from '../atoms/Flag';

export interface CountryCardProps {
    country: Country;
    onSelect: (code: string) => void;
    }

    export function CountryCard({ country, onSelect }: CountryCardProps): JSX.Element {
    const countryCode = country.codes?.cca2 || country.codes?.cca3 || '';
    const capitalName = country.capitals && country.capitals.length > 0 ? country.capitals[0] : 'N/A';

    return (
        <article className="flex flex-col justify-between overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-100 transition-all hover:shadow-md">
        <div>
            <Flag
            src={country.flag.url}
            alt={country.flag.alt || `Bandera de ${country.names.common}`}
            />
            
            {/* Contenido centrado exacto al diseño */}
            <div className="p-6 text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
                {country.names.common}
            </h3>
            
            <div className="space-y-1.5 text-xs text-slate-500 font-medium">
                <p>Región: <span className="text-slate-600">{country.region}</span></p>
                <p>Capital: <span className="text-slate-600">{capitalName}</span></p>
                <p>Población: <span className="text-slate-600">{formatPopulation(country.population)}</span></p>
            </div>
            </div>
        </div>

        {/* Botón naranja 'Ver más' */}
        <div className="p-6 pt-0 flex justify-center">
            <button
            type="button"
            onClick={() => onSelect(countryCode)}
            className="w-40 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 px-4 text-sm transition-colors shadow-sm cursor-pointer"
            >
            Ver más
            </button>
        </div>
        </article>
    );
}