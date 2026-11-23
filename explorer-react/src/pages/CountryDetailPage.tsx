// src/pages/CountryDetailPage.tsx
import type { JSX } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useCountryDetail } from '../hooks/useCountryDetail';
import { toAlpha2Code } from '../utils/country-codes';

export function CountryDetailPage(): JSX.Element {
    const { code } = useParams<{ code: string }>();
    const navigate = useNavigate();
    const { country, loading, error, retry } = useCountryDetail(code);

    const capitalText = Array.isArray(country?.capital)
        ? country.capital.join(', ')
        : country?.capital || 'N/A';

    return (
        <div className="min-h-screen flex flex-col justify-between bg-[#f4f6f9] dark:bg-slate-950 text-slate-800 dark:text-slate-100">
        <main className="max-w-6xl mx-auto w-full px-6 sm:px-10 py-10 flex-1">
            <div className="mb-10">
            <button
                type="button"
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#f59e42] hover:bg-[#e58d30] text-slate-900 font-semibold text-xs shadow-sm transition-colors cursor-pointer"
            >
                <span>←</span>
                <span>Atrás</span>
            </button>
            </div>

            {loading && (
            <div className="flex flex-col items-center justify-center py-20">
                <div className="w-10 h-10 border-4 border-slate-300 border-t-[#f59e42] rounded-full animate-spin mb-4" />
                <p className="text-sm text-slate-500">Cargando información del país...</p>
            </div>
            )}

            {!loading && error && (
            <div className="max-w-lg mx-auto p-8 rounded-2xl bg-white dark:bg-slate-900 border border-red-200 dark:border-red-900 text-center shadow-sm">
                <h2 className="text-lg font-bold text-red-600 dark:text-red-400 mb-2">
                No se pudo mostrar el país
                </h2>
                <p className="text-xs text-slate-500 mb-6">{error}</p>
                <div className="flex justify-center gap-3">
                <button
                    type="button"
                    onClick={retry}
                    className="px-5 py-2 rounded-full bg-[#f59e42] text-slate-900 text-xs font-semibold cursor-pointer"
                >
                    Reintentar
                </button>
                <Link
                    to="/"
                    className="px-5 py-2 rounded-full bg-slate-200 dark:bg-slate-800 text-xs font-semibold"
                >
                    Ir al inicio
                </Link>
                </div>
            </div>
            )}

            {!loading && !error && country && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                <div className="lg:col-span-5">
                <div className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800">
                    <img
                    src={country.flags?.svg || country.flags?.url || ''}
                    alt={country.flags?.alt || `Bandera de ${country.names.common}`}
                    className="w-full h-auto object-cover aspect-[16/10]"
                    />
                </div>
                </div>

                <div className="lg:col-span-7">
                <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                    {country.names.common}
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 text-sm text-slate-700 dark:text-slate-300 mb-8">
                    <div className="space-y-2.5">
                    <p>
                        <span className="font-semibold text-slate-900 dark:text-white">Nombre nativo:</span>{' '}
                        {country.nativeName || country.names.common}
                    </p>
                    <p>
                        <span className="font-semibold text-slate-900 dark:text-white">Población:</span>{' '}
                        {country.population.toLocaleString()}
                    </p>
                    <p>
                        <span className="font-semibold text-slate-900 dark:text-white">Región:</span>{' '}
                        {country.region}
                    </p>
                    <p>
                        <span className="font-semibold text-slate-900 dark:text-white">Subregión:</span>{' '}
                        {country.subregion || 'N/A'}
                    </p>
                    <p>
                        <span className="font-semibold text-slate-900 dark:text-white">Capital:</span>{' '}
                        {capitalText}
                    </p>
                    </div>

                    <div className="space-y-2.5">
                    <p>
                        <span className="font-semibold text-slate-900 dark:text-white">Dominio:</span>{' '}
                        {country.tld && country.tld.length > 0 ? country.tld.join(', ') : 'N/A'}
                    </p>
                    <p>
                        <span className="font-semibold text-slate-900 dark:text-white">Moneda:</span>{' '}
                        {country.currencies && country.currencies.length > 0
                        ? country.currencies.join(', ')
                        : 'N/A'}
                    </p>
                    <p>
                        <span className="font-semibold text-slate-900 dark:text-white">Idiomas:</span>{' '}
                        {country.languages && country.languages.length > 0
                        ? country.languages.join(', ')
                        : 'N/A'}
                    </p>
                    </div>
                </div>

                <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
                    Países fronterizos:
                    </p>
                    {country.borders && country.borders.length > 0 ? (
                    <div className="flex flex-wrap gap-2.5">
                        {country.borders.map((borderCode) => {
                        const targetAlpha2 = toAlpha2Code(borderCode);
                        return (
                            <Link
                            key={borderCode}
                            to={`/country/${targetAlpha2}`}
                            className="px-4 py-1.5 rounded-lg bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 text-xs font-medium shadow-sm border border-slate-200/80 dark:border-slate-800 hover:border-[#f59e42] hover:text-[#d97706] transition-colors"
                            >
                            {borderCode}
                            </Link>
                        );
                        })}
                    </div>
                    ) : (
                    <p className="text-xs text-slate-400">
                        Este país no tiene fronteras terrestres registradas.
                    </p>
                    )}
                </div>
                </div>
            </div>
            )}
        </main>

        <footer className="bg-[#2c4a87] text-white px-8 py-6 mt-12">
            <div className="max-w-6xl mx-auto">
            <Link to="/" className="text-base font-bold tracking-tight hover:underline">
                Explorer App
            </Link>
            <p className="text-[11px] text-blue-200 mt-1">
                © 2026 Explorer App. Datos proporcionados por REST Countries.
            </p>
            </div>
        </footer>
        </div>
    );
}