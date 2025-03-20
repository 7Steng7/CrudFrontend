export const translateTitle = (title : string) => {
    const translations: Record<string, string> = {
        Mr: 'Sr',
        Mrs: 'Sra',
        Miss: 'Srta',
        Dr: 'Dr',
    };
    return translations[title] || title; // Si no hay traducción, devuelve el título original
};