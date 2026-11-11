import type { Country } from '../types/country';

export function filterCountries(
    countries: Country[],
    query: string,
    region: string
): Country[] {
const cleanQuery = query.toLowerCase().trim();

return countries.filter((country) => {
    const countryCode = country.code?.toLowerCase() ?? '';
    const cca3 = country.codes?.cca3?.toLowerCase() ?? '';
    const cca2 = country.codes?.cca2?.toLowerCase() ?? '';

    const matchesQuery =
        cleanQuery === '' ||
        country.names.common.toLowerCase().includes(cleanQuery) ||
        country.names.official?.toLowerCase().includes(cleanQuery) ||
        countryCode.includes(cleanQuery) ||
        cca3.includes(cleanQuery) ||
        cca2.includes(cleanQuery);

        const matchesRegion = region === '' || country.region === region;

        return matchesQuery && matchesRegion;
    });
}