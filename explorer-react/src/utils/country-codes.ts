// src/utils/country-codes.ts
const ALPHA3_TO_ALPHA2: Record<string, string> = {
    AFG: 'AF', ARG: 'AR', AUS: 'AU', BLZ: 'BZ', BOL: 'BO',
    BRA: 'BR', CAN: 'CA', CHL: 'CL', CHN: 'CN', COL: 'CO',
    CRI: 'CR', DEU: 'DE', EGY: 'EG', ESP: 'ES', FRA: 'FR',
    GTM: 'GT', HND: 'HN', IND: 'IN', IRN: 'IR', ITA: 'IT',
    JPN: 'JP', KOR: 'KR', MEX: 'MX', NIC: 'NI', NOR: 'NO',
    NZL: 'NZ', PAK: 'PK', PAN: 'PA', PER: 'PE', PRY: 'PY',
    SLV: 'SV', TJK: 'TJ', TKM: 'TM', URY: 'UY', USA: 'US',
    UZB: 'UZ', VEN: 'VE', ZAF: 'ZA',
};

export function toAlpha2Code(code: string): string {
    const upper = code.trim().toUpperCase();
    return ALPHA3_TO_ALPHA2[upper] ?? upper.slice(0, 2);
}
