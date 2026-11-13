// src/pages/HomePage.tsx
import type { JSX, ReactNode } from 'react';
import { Header } from '../components/organisms/Header';
import { CountryGrid } from '../components/organisms/CountryGrid';
import { useCountries } from '../hooks/useCountries';
import { useSearch } from '../hooks/useSearch';

export interface HomePageProps {
        navigation: ReactNode;
    }

    export function HomePage({ navigation }: HomePageProps): JSX.Element {
    const { countries, loading, error } = useCountries();
    const {
        query,
        region,
        setQuery,
        setRegion,
        clearFilters,
        filteredCountries,
    } = useSearch(countries);

    return (
        <>
        <Header
            query={query}
            region={region}
            onQueryChange={setQuery}
            onRegionChange={setRegion}
            onClearFilters={clearFilters}
        >
            {navigation}
        </Header>

        <main className="max-w-7xl mx-auto px-8 py-8 w-full flex-1">
            <section className="mb-8">
            <h2 className="text-3xl font-serif text-slate-900 dark:text-white mb-1">
                Where will you go next?
            </h2>
            <p className="text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 font-medium">
                Find your country and use the available filters to explore its information.
            </p>
            </section>

            <section className="mb-12">
            {loading && (
                <div className="flex flex-col items-center justify-center p-16 text-center">
                <div className="w-12 h-12 border-4 border-slate-300 dark:border-slate-700 border-t-orange-500 rounded-full animate-spin mb-4" />
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                    Cargando datos de países...
                </p>
                </div>
            )}

            {!loading && error && (
                <div className="p-8 text-center rounded-2xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-400">
                <p className="text-lg font-bold mb-2">Error de carga</p>
                <p className="text-xs mb-4">{error}</p>
                </div>
            )}

            {!loading && !error && (
                <>
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Suggested countries
                    </h3>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    Resultados: {filteredCountries.length}
                    </span>
                </div>

                {filteredCountries.length > 0 ? (
                    <CountryGrid countries={filteredCountries} />
                ) : (
                    <div className="p-12 text-center rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <p className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-2">
                        No se encontraron países que coincidan con los criterios.
                    </p>
                    <p className="text-xs text-slate-400 mb-4">
                        Prueba ajustando el texto o seleccionando otra región.
                    </p>
                    <button
                        type="button"
                        onClick={clearFilters}
                        className="px-6 py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold transition-colors shadow-sm cursor-pointer"
                    >
                        Limpiar filtros
                    </button>
                    </div>
                )}
                </>
            )}
            </section>
        </main>
        </>
    );
}