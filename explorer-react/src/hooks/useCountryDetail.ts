// src/hooks/useCountryDetail.ts
import { useState, useEffect, useCallback } from 'react';
import { fetchCountryByCode } from '../services/countries';
import type { CountryDetail } from '../types/country';

export interface UseCountryDetailReturn {
    country: CountryDetail | null;
    loading: boolean;
    error: string | null;
    retry: () => void;
    }

    interface DetailState {
    key: string;
    country: CountryDetail | null;
    error: string | null;
    }

    export function useCountryDetail(code?: string): UseCountryDetailReturn {
    const [attempt, setAttempt] = useState<number>(0);
    const requestKey = `${code ?? ''}-${attempt}`;

    const [state, setState] = useState<DetailState>({
        key: '',
        country: null,
        error: null,
    });

    const retry = useCallback(() => {
        setAttempt((prev) => prev + 1);
    }, []);

    useEffect(() => {
        if (!code) return;

        let active = true;

        fetchCountryByCode(code)
        .then((data) => {
            if (active) {
            setState({ key: requestKey, country: data, error: null });
            }
        })
        .catch((err: unknown) => {
            if (active) {
            setState({
                key: requestKey,
                country: null,
                error: err instanceof Error ? err.message : 'Error al cargar el detalle del país.',
            });
            }
        });

        return () => {
        active = false;
        };
    }, [code, requestKey]);

    if (!code) {
        return {
        country: null,
        loading: false,
        error: 'No se proporcionó un código de país en la URL.',
        retry,
        };
    }

    const isLoading = state.key !== requestKey;

    return {
        country: isLoading ? null : state.country,
        loading: isLoading,
        error: isLoading ? null : state.error,
        retry,
    };
}