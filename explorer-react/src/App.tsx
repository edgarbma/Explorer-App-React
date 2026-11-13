// src/App.tsx
import { useState, useEffect, type JSX } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { CountryDetailPage } from './pages/CountryDetailPage';

export default function App(): JSX.Element {
  const [isDark, setIsDark] = useState<boolean>(false);

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

  const navigationBar = (
    <nav className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 text-xs font-medium text-slate-600 dark:text-slate-400">
      <Link
        to="/"
        className="text-slate-900 dark:text-white font-bold border-b-2 border-slate-900 dark:border-white pb-0.5"
      >
        Home
      </Link>
      <Link to="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">
        Explore Plans
      </Link>
      <Link to="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">
        About
      </Link>

      <button
        type="button"
        onClick={toggleDarkMode}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 shadow-sm border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer select-none"
        aria-label="Cambiar tema"
      >
        {isDark ? '☀️ Light' : '🌙 Dark'}
      </button>
    </nav>
  );

  return (
    <div className="min-h-screen bg-[#eef1f6] dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans flex flex-col justify-between transition-colors duration-300">
      <Routes>
        <Route path="/" element={<HomePage navigation={navigationBar} />} />
        <Route path="/country/:code" element={<CountryDetailPage navigation={navigationBar} />} />
      </Routes>

      <footer className="px-8 py-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4">
        <div>
          <p className="text-lg font-bold text-slate-900 dark:text-white">Explorer App</p>
          <p className="text-[11px] text-slate-400 dark:text-slate-500">
            © 2026 Explorer App. Data provided by REST Countries.
          </p>
        </div>
        <div className="flex space-x-6 text-slate-600 dark:text-slate-400 font-medium">
          <Link to="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            Documentation
          </Link>
          <Link to="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            Source Code
          </Link>
          <Link to="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            Privacy
          </Link>
        </div>
      </footer>
    </div>
  );
}