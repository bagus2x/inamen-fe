export const MODE = process.env.NODE_ENV;
export const API = MODE === 'production' ? process.env.API_PROD : process.env.API_DEV;