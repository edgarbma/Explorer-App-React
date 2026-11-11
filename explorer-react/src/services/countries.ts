import type { Country } from '../types/country';

const BASE_URL = 'https://restcountries.com/v3.1';

export async function fetchAllCountries(signal?: AbortSignal): Promise<Country[]> {
    const response = await fetch(`${BASE_URL}/all?fields=name,flags,population,region,capital,cca3`, {
        signal,
    });

    if (!response.ok) {
        throw new Error(`Error en la petición: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    return data.map((item: any) => ({
        code: item.cca3 ?? '',
        names: {
        common: item.name?.common ?? 'Sin nombre',
        official: item.name?.official ?? 'Sin nombre oficial',
        },
        flags: {
        svg: item.flags?.svg ?? item.flags?.png ?? '',
        alt: item.flags?.alt ?? `Bandera de ${item.name?.common ?? 'país'}`,
        },
        population: item.population ?? 0,
        region: item.region ?? 'Desconocida',
        capital: Array.isArray(item.capital) && item.capital.length > 0 ? item.capital[0] : 'Sin capital',
    }));
}