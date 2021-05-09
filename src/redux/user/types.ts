import { ErrorDetail } from '~redux/common';

export interface User {
    id: number;
    photo: string;
    username: string;
    email: string;
}

export interface Data {
    user: User;
    accessToken: string;
}

export interface State {
    data: User | null;
    error: ErrorDetail | null;
    loading: boolean;
}

export type UserAction =
    | { type: 'USER_SIGNIN_REQUEST' }
    | { type: 'USER_SIGNIN_SUCCESS'; data: Data }
    | { type: 'USER_SIGNIN_FAIL'; error: ErrorDetail }
    | { type: 'USER_SIGNUP_REQUEST' }
    | { type: 'USER_SIGNUP_SUCCESS'; data: Data }
    | { type: 'USER_SIGNUP_FAIL'; error: ErrorDetail }
    | { type: 'GET_USER_REQUEST' }
    | { type: 'GET_USER_SUCCESS'; user: User }
    | { type: 'GET_USER_FAIL'; error: ErrorDetail }
    | { type: 'USER_UPDATE_REQUEST' }
    | { type: 'USER_UPDATE_SUCCESS'; user: User }
    | { type: 'USER_UPDATE_FAIL'; error: ErrorDetail }
    | { type: 'USER_UPDATE_PHOTO_REQUEST' }
    | { type: 'USER_UPDATE_PHOTO_SUCCESS'; photo: string }
    | { type: 'USER_UPDATE_PHOTO_FAIL'; error: ErrorDetail };
