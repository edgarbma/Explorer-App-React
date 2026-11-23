// src/services/countries.ts
import { countriesDemo } from '../data/countries-demo';
import type { CountryDetail } from '../types/country';

interface RawCurrency {
    name: string;
    symbol?: string;
    }

    interface RawNativeName {
    common: string;
    official?: string;
    }

    interface RawCountryRecord {
    code?: string;
    cca2?: string;
    cca3?: string;
    codes?: { cca2?: string; cca3?: string };
    name?: {
        common: string;
        official?: string;
        nativeName?: Record<string, RawNativeName>;
    };
    names?: { common: string; official?: string };
    nativeName?: string;
    flags?: { svg?: string; url?: string; alt?: string };
    flag?: { svg?: string; url?: string; alt?: string };
    population?: number;
    region?: string;
    subregion?: string;
    capital?: string | string[];
    tld?: string[];
    currencies?: string[] | Record<string, RawCurrency>;
    languages?: string[] | Record<string, string>;
    borders?: string[];
    }

    export async function fetchCountryByCode(code: string): Promise<CountryDetail> {
    const normalized = code.trim().toUpperCase();

    try {
        const response = await fetch('/data/countries.json');
        if (response.ok) {
        const data: RawCountryRecord[] = await response.json();
        const match = data.find((item) => matchesCountryCode(item, normalized));
        if (match) {
            return mapToCountryDetail(match);
        }
        }
    } catch {
        // Fallback controlado hacia los datos locales de demostración
    }

    const demoMatch = (countriesDemo as RawCountryRecord[]).find((c) =>
        matchesCountryCode(c, normalized)
    );

    if (!demoMatch) {
        throw new Error(`No se encontró ningún país con el código "${code}".`);
    }

    return mapToCountryDetail(demoMatch);
    }

    function matchesCountryCode(item: RawCountryRecord, normalizedCode: string): boolean {
    const candidates = [
        item.cca2,
        item.cca3,
        item.codes?.cca2,
        item.codes?.cca3,
        item.code,
        item.code?.slice(0, 2),
    ];

    return candidates.some((candidate) => candidate?.toUpperCase() === normalizedCode);
    }

    function mapToCountryDetail(raw: RawCountryRecord): CountryDetail {
    const nativeValues = raw.name?.nativeName ? Object.values(raw.name.nativeName) : [];
    const commonName = raw.names?.common || raw.name?.common || 'Sin nombre';
    const nativeName = raw.nativeName || nativeValues[0]?.common || commonName;

    const currenciesList = raw.currencies
        ? Array.isArray(raw.currencies)
        ? raw.currencies
        : Object.values(raw.currencies).map((c) => (c.symbol ? `${c.name} (${c.symbol})` : c.name))
        : [];

    const languagesList = raw.languages
        ? Array.isArray(raw.languages)
        ? raw.languages
        : Object.values(raw.languages)
        : [];

    return {
        code: raw.cca2 || raw.codes?.cca2 || raw.code || '',
        codes: {
        cca2: raw.cca2 || raw.codes?.cca2 || raw.code?.slice(0, 2),
        cca3: raw.cca3 || raw.codes?.cca3 || raw.code,
        },
        names: {
        common: commonName,
        official: raw.names?.official || raw.name?.official,
        },
        flags: {
        svg: raw.flags?.svg || raw.flags?.url || raw.flag?.url || '',
        alt: raw.flags?.alt || raw.flag?.alt || `Bandera de ${commonName}`,
        },
        population: raw.population ?? 0,
        region: raw.region || 'N/A',
        subregion: raw.subregion || 'N/A',
        capital: Array.isArray(raw.capital) ? raw.capital[0] : raw.capital || 'N/A',
        nativeName,
        tld: raw.tld || [],
        currencies: currenciesList,
        languages: languagesList,
        borders: raw.borders || [],
    };
}