export const MODE = process.env.NODE_ENV;
export const API = MODE === 'production' ? process.env.API_PROD : process.env.API_DEV;
export const FE_HOST = MODE === 'development' ? 'http://localhost:3000' : 'https://inamen.vercel.app';
