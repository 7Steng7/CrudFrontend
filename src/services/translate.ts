export const translateTitle = (title : string) => {
    const translations: Record<string, string> = {
        mr: 'Sr',
        mrs: 'Sra',
        ms: 'Srta',
        miss: 'Srta',
        dr: 'Dr',
    };
    return translations[title] || title; // Si no hay traducción, devuelve el título original
};