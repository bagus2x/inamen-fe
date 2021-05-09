import { Dispatch } from 'react';
import { AnyAction } from 'redux';
import axios from 'axios';
import { Data, UserAction } from '~redux/user/types';
import { writeError, Response } from '~redux/common';
import { API } from '~libs/global-var';

/*Sign In action*/

interface SignInRequest {
    username: string;
    password: string;
}

interface SignInResponse extends Response {
    data?: {
        user: {
            id: number;
            photo: string;
            username: string;
            email: string;
        };
        accessToken: string;
    };
}

export const signIn = (req: SignInRequest) => async (dispatch: Dispatch<UserAction>) => {
    dispatch({ type: 'USER_SIGNIN_REQUEST' });

    try {
        const res = await axios.post<SignInResponse>(`${API}/api/v1/user/signin`, req);
        dispatch({ type: 'USER_SIGNIN_SUCCESS', data: res.data.data as Data });
    } catch (err) {
        dispatch({ type: 'USER_SIGNIN_FAIL', error: writeError(err, 'Sign In') });
    }
};

/* Sign Up action*/

interface SignUpRequest {
    email?: string;
    username?: string;
    password?: string;
}

type SignUpResponse = SignInResponse;

export const signUp = (req: SignUpRequest) => async (dispatch: Dispatch<UserAction>) => {
    dispatch({ type: 'USER_SIGNUP_REQUEST' });

    try {
        const res = await axios.post<SignUpResponse>(`${API}/api/v1/user/signup`, req);
        dispatch({ type: 'USER_SIGNUP_SUCCESS', data: res.data.data as Data });
    } catch (err) {
        dispatch({ type: 'USER_SIGNUP_FAIL', error: writeError(err, 'Sign Up error') });
    }
};

/* Get user action*/

interface GetuserResponse extends Response {
    data: {
        id: number;
        photo: string;
        username: string;
        email: string;
    };
}

export const getUser = (accessToken: string) => async (dispatch: Dispatch<UserAction>) => {
    dispatch({ type: 'GET_USER_REQUEST' });

    try {
        const res = await axios.get<GetuserResponse>(`${API}/api/v1/user`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        dispatch({ type: 'GET_USER_SUCCESS', user: res.data.data });
    } catch (err) {
        dispatch({ type: 'GET_USER_FAIL', error: writeError(err, 'Get user by access token') });
    }
};

/* Sign Out action */

export const signOut = () => async (dispatch: Dispatch<AnyAction>) => {
    dispatch({ type: 'CLEAR_STATE' });
};
