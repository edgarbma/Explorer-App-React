import type { JSX, ChangeEvent } from 'react';

export interface RegionFilterProps {
    region: string;
    onRegionChange: (region: string) => void;
}

export function RegionFilter({ region, onRegionChange }: RegionFilterProps): JSX.Element {
const handleChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    onRegionChange(e.target.value);
};

return (
    <div className="w-full sm:w-auto">
    <label htmlFor="region-select" className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">
        Filtrar por región
    </label>
    <select
        id="region-select"
        value={region}
        onChange={handleChange}
        className="w-full sm:w-auto bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 rounded-full py-3 px-6 text-sm outline-none shadow-sm border border-transparent dark:border-slate-800 cursor-pointer"
    >
        <option value="">Todas las regiones</option>
        <option value="Africa">África</option>
        <option value="Americas">América</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europa</option>
        <option value="Oceania">Oceanía</option>
    </select>
    </div>
    );
}