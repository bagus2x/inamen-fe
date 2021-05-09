import { User, UserAction, State } from '~redux/user/types';
import { setAccessToken } from '~libs/access-token';

export const initialState: State = {
    data: null,
    error: null,
    loading: false
};

export default function reducer(state: State = initialState, action: UserAction): State {
    switch (action.type) {
        case 'USER_SIGNIN_REQUEST':
        case 'USER_SIGNUP_REQUEST':
        case 'GET_USER_REQUEST':
        case 'USER_UPDATE_REQUEST':
        case 'USER_UPDATE_PHOTO_REQUEST':
            return {
                ...state,
                error: null,
                loading: true
            };
        case 'USER_SIGNUP_SUCCESS':
        case 'USER_SIGNIN_SUCCESS':
            setAccessToken(action.data.accessToken);
            return {
                ...state,
                data: action.data.user,
                loading: false
            };
        case 'GET_USER_SUCCESS':
        case 'USER_UPDATE_SUCCESS':
            return {
                ...state,
                data: action.user,
                loading: false
            };
        case 'USER_UPDATE_PHOTO_SUCCESS':
            return {
                ...state,
                data: {
                    ...state.data,
                    photo: action.photo
                } as User,
                loading: false
            };
        case 'USER_SIGNUP_FAIL':
        case 'USER_SIGNIN_FAIL':
        case 'GET_USER_FAIL':
        case 'USER_UPDATE_PHOTO_FAIL':
        case 'USER_UPDATE_FAIL':
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}
