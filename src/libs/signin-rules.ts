import { RegisterOptions } from 'react-hook-form';

const Rules: { [key: string]: RegisterOptions } = {
    username: {
        minLength: {
            value: 4,
            message: 'Username must have at least 4 characters'
        },
        maxLength: {
            value: 50,
            message: 'Username max length is 50 character'
        },
        required: 'The username field is required'
    },
    password: {
        minLength: {
            value: 6,
            message: 'Password must have at least 6 characters'
        },
        maxLength: {
            value: 50,
            message: 'Password max length is 50 character'
        },
        required: 'The password field is required'
    }
};

export default Rules;
