import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '~redux/user/actions';
import { StoreState } from '~redux/store';
import { State } from '~redux/user/types';
import { getAccessToken } from '~libs/access-token';

const useUser = () => {
    const { data, loading, error } = useSelector<StoreState, State>((state) => state.user);
    const accessToken = getAccessToken();
    const dispatch = useDispatch();

    useEffect(() => {
        if (accessToken && !data) dispatch(getUser(accessToken));
    }, [data]);

    return {
        data,
        loading,
        error,
        isAuthenticated: !error && !!accessToken
    };
};

export default useUser;
