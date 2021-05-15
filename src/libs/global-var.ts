export const MODE = process.env.NODE_ENV;
export const PHP_SERVICE = MODE === 'production' ? process.env.PHP_SERVICE_PROD : process.env.PHP_SERVICE_DEV;
export const GO_SERVICE = MODE === 'production' ? process.env.GO_SERVICE_PROD : process.env.GO_SERVICE_DEV;
