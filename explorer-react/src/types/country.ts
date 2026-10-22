// src/types/country.ts
export interface CountryNames {
    common: string;
    official?: string;
}

export interface CountryFlag {
    url: string;
    alt?: string;
    description?: string;
}

export interface CountryCodes {
    cca2?: string;
    cca3?: string;
}

export interface Country {
    names: CountryNames;
    flag: CountryFlag;
    population: number;
    region: string;
    codes?: CountryCodes;
    capitals?: string[];
}