// src/data/countries-demo.ts
import type { Country } from '../types/country';

export const paisUno: Country = {
    names: {
        common: 'El Salvador',
    },
    flag: {
        url: 'https://flagcdn.com/sv.svg',
        alt: 'Bandera de El Salvador',
    },
    population: 6314000,
    region: 'Americas',
    };

export const paisDos: Country = {
    names: {
        common: 'Guatemala',
    },
    flag: {
        url: 'https://flagcdn.com/gt.svg',
        alt: 'Bandera de Guatemala',
    },
    population: 17610000,
    region: 'Americas',
    };

export const paisTres: Country = {
    names: {
        common: 'Costa Rica',
    },
    flag: {
        url: 'https://flagcdn.com/cr.svg',
        alt: 'Bandera de Costa Rica',
    },
    population: 5153000,
    region: 'Americas',
};