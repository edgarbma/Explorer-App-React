// src/pages/CountryDetailPage.tsx
import type { JSX, ReactNode } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useCountries } from '../hooks/useCountries';

export interface CountryDetailPageProps {
    navigation: ReactNode;
    }

    export function CountryDetailPage({ navigation }: CountryDetailPageProps): JSX.Element {
    const { code } = useParams<{ code: string }>();
    const navigate = useNavigate();
    const { countries, loading } = useCountries();

    const selectedCountry = countries.find(
        (c) =>
        c.code?.toLowerCase() === code?.toLowerCase() ||
        c.codes?.cca3?.toLowerCase() === code?.toLowerCase()
    );

    return (
        <>
        <header className="px-6 py-4 sm:px-8 sm:py-6 border-b border-slate-200/50 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
            <Link
                to="/"
                className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight"
            >
                Booking or browsing?
            </Link>
            {navigation}
            </div>
        </header>

        <main className="max-w-4xl mx-auto px-8 py-12 w-full flex-1">
            <div className="mb-8 flex items-center gap-4">
            <button
                type="button"
                onClick={() => navigate(-1)}
                className="px-5 py-2.5 rounded-full bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 text-xs font-semibold shadow-sm border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
                ← Volver atrás
            </button>

            <Link
                to="/"
                className="text-xs font-medium text-orange-600 dark:text-orange-400 hover:underline"
            >
                Ir al inicio
            </Link>
            </div>

            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <span className="inline-block px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400 text-xs font-bold mb-4">
                Ruta dinámica: /country/{code}
            </span>

            {loading ? (
                <p className="text-sm text-slate-500">Cargando información del país...</p>
            ) : selectedCountry ? (
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <img
                    src={selectedCountry.flags?.svg || selectedCountry.flags?.url || ''}
                    alt={selectedCountry.flags?.alt || selectedCountry.names.common}
                    className="w-40 h-28 object-cover rounded-xl border border-slate-200 dark:border-slate-700"
                />
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                    {selectedCountry.names.common}
                    </h1>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                    Código identificador recibido por URL: <strong>{code?.toUpperCase()}</strong>
                    </p>
                    <p className="text-xs text-slate-400 mt-2">
                    Vista inicial de detalle lista para ampliar sus datos en la siguiente sesión.
                    </p>
                </div>
                </div>
            ) : (
                <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    País no encontrado ({code})
                </h1>
                <p className="text-sm text-slate-500">
                    No se encontró ningún registro que coincida con el código indicado en la URL.
                </p>
                </div>
            )}
            </div>
        </main>
        </>
    );
    }