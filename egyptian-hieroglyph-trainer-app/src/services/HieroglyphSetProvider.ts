const HieroglyphSetProvider = {
    getRandomUniliteralSign: () => {
        const signs = Object.keys(uniliteralSigns)
        const randomIndex = Math.floor(Math.random() * signs.length)
        return signs[randomIndex];
    },

    getUniliteralSignTransliteration: (uniliteral: string) => {
        return uniliteralSigns[uniliteral];
    },

    getRandomUnilitralSignTransliteration: () => {
        const signs = Object.values(uniliteralSigns)
        const randomIndex = Math.floor(Math.random() * signs.length)
        return signs[randomIndex];
    },

    getRandomUniliteralPair: () => {
        const randomIndex = Math.floor(Math.random() * Object.keys(uniliteralSigns).length);
        return  {sign: Object.keys(uniliteralSigns)[randomIndex], transliteration: Object.values(uniliteralSigns)[randomIndex]};
    },

    getRandomTransliterationExcludingSpecifiedCharacters: (excluded:string[]) => {
        const signs = Object.values(uniliteralSigns).filter(sign => !excluded.includes(sign));
        const randomIndex = Math.floor(Math.random() * signs.length)
        return signs[randomIndex];
    },

    getFixedAmountOfRandomTransliterationsExcludingSpecifiedCharacters: (amount: number, excluded:string[]) => {
        const signs = Object.values(uniliteralSigns).filter(sign => !excluded.includes(sign));
        const randomIndexes = Array.from({length: amount}, () => Math.floor(Math.random() * signs.length));
        return randomIndexes.map(index => signs[index]);
    },
}

export default HieroglyphSetProvider

const uniliteralSigns: Record<string, string> = {
    '𓄿' : 'ꜣ',
    '𓇋':'ı͗',
    '𓏭':'ï',
    '𓇌':'y',
    '𓂝':'ꜥ',
    '𓅱':'w',
    '𓃀':'b',
    '𓊪':'p',
    '𓆑':'f',
    '𓅓':'m',
    '𓈖':'n',
    '𓂋':'r',
    '𓉔':'h',
    '𓎛':'ḥ',
    '𓐍':'ḫ',
    '𓄡':'ẖ',
    '𓊃':'z',
    '𓋴':'s',
    '𓈙':'š',
    '𓈎':'q',
    '𓎡':'k',
    '𓎼':'g',
    '𓏏':'t',
    '𓍿':'ṯ ',
    '𓂧':'d ',
    '𓆓':'ḏ',
}