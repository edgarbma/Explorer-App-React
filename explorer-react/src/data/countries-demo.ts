// src/data/countries-demo.ts
import type { Country } from '../types/country';

export const paisUno: Country = {
    names: { common: 'El Salvador' },
    flag: {
        url: 'https://flagcdn.com/sv.svg',
        alt: 'Bandera de El Salvador',
        description: 'Bandera oficial de El Salvador',
    },
    population: 6314000,
    region: 'Americas',
    codes: { cca2: 'SV', cca3: 'SLV' },
    capitals: ['San Salvador'],
};

export const paisDos: Country = {
    names: { common: 'Guatemala' },
    flag: {
        url: 'https://flagcdn.com/gt.svg',
        alt: 'Bandera de Guatemala',
        description: 'Bandera oficial de Guatemala',
    },
    population: 17610000,
    region: 'Americas',
    codes: { cca2: 'GT', cca3: 'GTM' },
    capitals: ['Ciudad de Guatemala'],
};

export const paisTres: Country = {
    names: { common: 'Costa Rica' },
    flag: {
        url: 'https://flagcdn.com/cr.svg',
        alt: 'Bandera de Costa Rica',
        description: 'Bandera oficial de Costa Rica',
    },
    population: 5153000,
    region: 'Americas',
    codes: { cca2: 'CR', cca3: 'CRI' },
    capitals: ['San José'],
};

export const paisCuatro: Country = {
    names: { common: 'Honduras' },
    flag: {
        url: 'https://flagcdn.com/hn.svg',
        alt: 'Bandera de Honduras',
        description: 'Bandera oficial de Honduras',
    },
    population: 10430000,
    region: 'Americas',
    codes: { cca2: 'HN', cca3: 'HND' },
    capitals: ['Tegucigalpa'],
};

export const countriesDemo: Country[] = [paisUno, paisDos, paisTres, paisCuatro];
