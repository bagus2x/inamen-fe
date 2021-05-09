import { useEffect } from 'react';
import Router from 'next/router';
import { removeAccessToken } from '~libs/access-token';
import useUser from '~libs/hooks/use-user';

const Auth: React.FC = ({ children }) => {
    const { isAuthenticated, data } = useUser();

    useEffect(() => {
        if (!isAuthenticated) {
            removeAccessToken();
            Router.replace('/signin');
        }
    }, [isAuthenticated]);

    if (!data) {
        return <div>loading...</div>;
    }

    return <>{children}</>;
};

export default Auth;
