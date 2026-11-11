export interface CountryNames {
    common: string;
    official?: string;
}

export interface CountryFlag {
    svg?: string;
    url?: string;
    alt?: string;
    description?: string;
}

export interface CountryCodes {
    cca2?: string;
    cca3?: string;
    ccn3?: string;
    cioc?: string;
}

export interface Country {
    code?: string;
    codes?: CountryCodes;
    names: CountryNames;
    flags: CountryFlag;
    flag?: CountryFlag;
    population: number;
    region: string;
    capital?: string | string[];
    capitals?: string[];
}