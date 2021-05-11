const truncateWords = (words: string, length: number, lastWords?: string) => {
    return words.length > length ? words.substring(0, length) + (lastWords ?? '...') : words;
};

export default truncateWords;
