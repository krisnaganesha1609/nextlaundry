import { selector } from 'recoil';
import { roles } from './role';

export const isOwnerSelector = selector({
    key: 'isOwnerSelector',
    get: ({ get }) => {
        const { authenticated, role } = get(roles);
        // Check if user is authenticated and has the required role
        return authenticated && role === 'owner';
    },
});