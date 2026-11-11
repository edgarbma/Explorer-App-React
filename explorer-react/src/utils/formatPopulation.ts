import type { Country } from '../types/country';

export function formatCapital(country: Country): string {
    if (Array.isArray(country.capital)) {
        return country.capital.join(', ');
    }
    if (country.capital) {
        return country.capital;
    }
    if (country.capitals && country.capitals.length > 0) {
        return country.capitals.join(', ');
    }
    return 'N/A';
}

export function getFlagDescription(country: Country): string {
return (
    country.flags?.description ||
    country.flags?.alt ||
    country.flag?.description ||
    country.flag?.alt ||
    `Bandera de ${country.names.common}`
    );
}

export function formatPopulationNumber(population: number): string {
    return new Intl.NumberFormat().format(population);
}