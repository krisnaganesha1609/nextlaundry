import { atom } from 'recoil';

export const roles = atom({
    key: 'roles',
    default: {
        authenticated: false,
        role: '',
    },
});