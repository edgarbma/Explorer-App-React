// src/hooks/useCountries.ts
import { useState, useEffect } from 'react';
import { countriesDemo } from '../data/countries-demo';
import type { Country } from '../types/country';

export interface UseCountriesReturn {
    countries: Country[];
    loading: boolean;
    error: string | null;
}

export function useCountries(): UseCountriesReturn {
    const [countries, setCountries] = useState<Country[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;
        setLoading(true);
        setError(null);

        const timer = setTimeout(() => {
        if (isMounted) {
            setCountries(countriesDemo);
            setLoading(false);
        }
        }, 250);

        return () => {
        isMounted = false;
        clearTimeout(timer);
        };
    }, []);

    return { countries, loading, error };
}