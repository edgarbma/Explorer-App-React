import type { Country } from '../types/country';

export const japon: Country = {
    names: { common: 'Japón' },
    flag: { url: 'https://flagcdn.com/jp.svg', alt: 'Bandera de Japón' },
    population: 125800000,
    region: 'Asia',
    codes: { cca2: 'JP', cca3: 'JPN' },
    capitals: ['Tokio'],
};

export const canada: Country = {
    names: { common: 'Canadá' },
    flag: { url: 'https://flagcdn.com/ca.svg', alt: 'Bandera de Canadá' },
    population: 38000000,
    region: 'América',
    codes: { cca2: 'CA', cca3: 'CAN' },
    capitals: ['Ottawa'],
};

export const francia: Country = {
    names: { common: 'Francia' },
    flag: { url: 'https://flagcdn.com/fr.svg', alt: 'Bandera de Francia' },
    population: 67750000,
    region: 'Europa',
    codes: { cca2: 'FR', cca3: 'FRA' },
    capitals: ['París'],
};

export const australia: Country = {
    names: { common: 'Australia' },
    flag: { url: 'https://flagcdn.com/au.svg', alt: 'Bandera de Australia' },
    population: 25600000,
    region: 'Oceanía',
    codes: { cca2: 'AU', cca3: 'AUS' },
    capitals: ['Canberra'],
};

export const countriesDemo: Country[] = [japon, canada, francia, australia];
