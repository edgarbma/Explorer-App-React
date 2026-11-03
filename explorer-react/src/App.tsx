import { useState, useEffect, type JSX } from 'react';
import { Header } from './components/organisms/Header';
import { CountryGrid } from './components/organisms/CountryGrid';
import { countriesDemo } from './data/countries-demo';
import { filterCountries } from './utils/filter';
import type { Country } from './types/country';

export default function App(): JSX.Element {
  const [isDark, setIsDark] = useState<boolean>(false);

  const [query, setQuery] = useState<string>('');
  const [region, setRegion] = useState<string>('');

  const filteredCountries: Country[] = filterCountries(countriesDemo, query, region);

  const handleClearFilters = (): void => {
    setQuery('');
    setRegion('');
  };

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = (): void => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.remove('dark');
      setIsDark(false);
    } else {
      root.classList.add('dark');
      setIsDark(true);
    }
  };

  const handleSelect = (code: string): void => {
    console.log(`País seleccionado con código: ${code}`);
  };

  return (
    <div className="min-h-screen bg-[#eef1f6] dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans flex flex-col justify-between transition-colors duration-300">
      <Header
        query={query}
        region={region}
        onQueryChange={setQuery}
        onRegionChange={setRegion}
        onClearFilters={handleClearFilters}
      >
        <nav className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 text-xs font-medium text-slate-600 dark:text-slate-400">
    <a href="#home" className="text-slate-900 dark:text-white font-bold border-b-2 border-slate-900 dark:border-white pb-0.5">
      Home
    </a>
    <a href="#plans" className="hover:text-slate-900 dark:hover:text-white transition-colors">
      Explore Plans
    </a>
    <a href="#about" className="hover:text-slate-900 dark:hover:text-white transition-colors">
      About
    </a>
    
    <button
      type="button"
      onClick={toggleDarkMode}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 shadow-sm border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer select-none"
      aria-label="Cambiar tema"
    >
      {isDark ? '☀️ Light' : '🌙 Dark'}
    </button>
  </nav>
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
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Suggested countries
            </h3>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
              Resultados: {filteredCountries.length}
            </span>
          </div>

          {filteredCountries.length > 0 ? (
            <CountryGrid countries={filteredCountries} onSelect={handleSelect} />
          ) : (
            <div className="p-12 text-center rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <p className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-2">
                No se encontraron países que coincidan con los criterios.
              </p>
              <p className="text-xs text-slate-400 mb-4">
                Prueba ajustando el término de búsqueda o seleccionando otra región.
              </p>
              <button
                type="button"
                onClick={handleClearFilters}
                className="px-6 py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold transition-colors shadow-sm cursor-pointer"
              >
                Limpiar filtros
              </button>
            </div>
          )}
        </section>
      </main>

      <footer className="px-8 py-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4">
        <div>
          <p className="text-lg font-bold text-slate-900 dark:text-white">Explorer App</p>
          <p className="text-[11px] text-slate-400 dark:text-slate-500">© 2026 Explorer App. Data provided by REST Countries.</p>
        </div>
        <div className="flex space-x-6 text-slate-600 dark:text-slate-400 font-medium">
          <a href="#doc" className="hover:text-slate-900 dark:hover:text-white transition-colors">Documentation</a>
          <a href="#source" className="hover:text-slate-900 dark:hover:text-white transition-colors">Source Code</a>
          <a href="#privacy" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy</a>
        </div>
      </footer>
    </div>
  );
}
