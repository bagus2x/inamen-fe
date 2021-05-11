const truncateWords = (words: string, length: number, lastWords?: string) => {
    return words.substring(0, length) + (lastWords ?? '...');
};

export default truncateWords;
