import { atom } from 'recoil';

const userDetailsAtom = atom({
    key: 'userDetails',
    default: ""
});

const userUpdatesAtom = atom({
    key: 'userUpdates',
    default: ""
});

const outletDetailsAtom = atom({
    key: 'outletDetails',
    default: ""
});

export { userDetailsAtom, outletDetailsAtom, userUpdatesAtom };