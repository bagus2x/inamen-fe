module.exports = {
    pageExtensions: ['tsx', 'ts'],
    env: {
        APP_NAME: 'INAMEN',
        PHP_SERVICE_DEV: 'http://localhost:8080',
        PHP_SERVICE_PROD: 'https://inamen.herokuapp.com',
        GO_SERVICE_DEV: 'http://192.168.1.111:8080',
        GO_SERVICE_PROD: 'http://192.168.1.111:8080',
        GO_WS_SERVICE_DEV: 'ws://192.168.1.111:8080',
        GO_WS_SERVICE_PROD: 'ws://192.168.1.111:8080'
    }
};
