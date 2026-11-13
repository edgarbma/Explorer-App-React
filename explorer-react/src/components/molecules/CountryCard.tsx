// src/components/molecules/CountryCard.tsx
import type { JSX } from 'react';
import { Link } from 'react-router-dom';
import type { Country } from '../../types/country';

export interface CountryCardProps {
    country: Country;
}

    export function CountryCard({ country }: CountryCardProps): JSX.Element {
    const countryCode = country.code || country.codes?.cca3 || country.codes?.cca2 || '';
    const capitalName = Array.isArray(country.capital)
        ? country.capital[0]
        : country.capital || (country.capitals && country.capitals[0]) || 'N/A';

    const flagUrl = country.flags?.svg || country.flags?.url || country.flag?.svg || country.flag?.url || '';
    const flagAlt = country.flags?.alt || country.flag?.alt || `Bandera de ${country.names.common}`;

    return (
        <Link
        to={`/country/${countryCode}`}
        className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm border border-slate-200/60 dark:border-slate-800 flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
        >
        <div className="relative aspect-[16/10] w-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
            <img
            src={flagUrl}
            alt={flagAlt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
        </div>

        <div className="p-5 flex-1 flex flex-col justify-between">
            <div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 line-clamp-1">
                {country.names.common}
            </h4>

            <div className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                <p>
                <span className="font-semibold text-slate-700 dark:text-slate-300">Población:</span>{' '}
                {country.population.toLocaleString()}
                </p>
                <p>
                <span className="font-semibold text-slate-700 dark:text-slate-300">Región:</span>{' '}
                {country.region}
                </p>
                <p>
                <span className="font-semibold text-slate-700 dark:text-slate-300">Capital:</span>{' '}
                {capitalName}
                </p>
            </div>
            </div>

            <span className="mt-4 inline-block text-center w-full py-2 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:bg-orange-500 group-hover:text-white text-slate-700 dark:text-slate-200 text-xs font-semibold transition-colors">
            Ver detalle
            </span>
        </div>
        </Link>
    );
}