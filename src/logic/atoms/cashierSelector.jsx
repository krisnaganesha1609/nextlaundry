import { selector } from 'recoil';
import { roles } from './role';

export const isCashierSelector = selector({
    key: 'isCashierSelector',
    get: ({ get }) => {
        const { authenticated, role } = get(roles);
        // Check if user is authenticated and has the required role
        return authenticated && role === 'kasir';
    },
});