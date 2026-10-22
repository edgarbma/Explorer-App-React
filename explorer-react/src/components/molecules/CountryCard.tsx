import type { JSX } from 'react';
import type { Country } from '../../types/country';
import { formatPopulation } from '../../utils/formatPopulation';
import { Flag } from '../atoms/Flag';
import { Badge } from '../atoms/Badge';

export interface CountryCardProps {
    country: Country;
    onSelect: (code: string) => void;
}

export function CountryCard({ country, onSelect }: CountryCardProps): JSX.Element {
// Extraemos el código disponible del país (por ejemplo, cca2 o alpha_2)
const countryCode = country.codes?.cca2 || country.codes?.cca3 || '';

return (
    <article className="overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-xl dark:bg-slate-800 flex flex-col justify-between">
        <div>
            <Flag
            src={country.flag.url}
            alt={country.flag.alt || `Bandera de ${country.names.common}`}
            />
            <div className="p-5">
            <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                {country.names.common}
                </h2>
                <Badge region={country.region} />
            </div>
            <p className="mt-3 text-slate-700 dark:text-slate-200">
                Población: {formatPopulation(country.population)}
            </p>
            </div>
        </div>

        <div className="p-5 pt-0">
            <button
            type="button"
            onClick={() => onSelect(countryCode)}
            className="w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
            >
            Seleccionar país
            </button>
        </div>
        </article>
    );
}