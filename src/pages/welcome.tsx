import React from 'react';
import App from '~components/layouts/App';
import Auth from '~components/layouts/Auth';
import useUser from '~libs/hooks/use-user';

function Welcome() {
    const { isAuthenticated, data } = useUser();

    return <div>{JSON.stringify(isAuthenticated)}</div>;
}

Welcome.XLayout = App;
Welcome.XAuth = Auth;

export default Welcome;
