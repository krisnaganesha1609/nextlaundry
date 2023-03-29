import { atom } from 'recoil';

const userDetailsAtom = atom({
    key: 'userDetails',
    default: ""
});

const userUpdatesAtom = atom({
    key: 'userUpdates',
    default: ""
});

const userDeletesAtom = atom({
    key: 'userDeletes',
    default: ""
});

const outletDetailsAtom = atom({
    key: 'outletDetails',
    default: ""
});

const outletUpdatesAtom = atom({
    key: 'outletUpdates',
    default: ""
});

const outletDeletesAtom = atom({
    key: 'outletDeletes',
    default: ""
});

const memberDetailsAtom = atom({
    key: 'memberDetails',
    default: ""
});

const memberUpdatesAtom = atom({
    key: 'memberUpdates',
    default: ""
});

const memberDeletesAtom = atom({
    key: 'memberDeletes',
    default: ""
});

const productDetailsAtom = atom({
    key: 'productDetails',
    default: ""
});

const productUpdatesAtom = atom({
    key: 'productUpdates',
    default: ""
});

const productDeletesAtom = atom({
    key: 'productDeletes',
    default: ""
});

const transactionDetailsAtom = atom({
    key: 'transactionDetails',
    default: []
});

const transactionUpdatesAtom = atom({
    key: 'transactionUpdates',
    default: ""
});


export { userDetailsAtom, outletDetailsAtom, userUpdatesAtom, userDeletesAtom, outletUpdatesAtom, outletDeletesAtom, memberDetailsAtom, memberUpdatesAtom, memberDeletesAtom, productDetailsAtom, productUpdatesAtom, productDeletesAtom, transactionDetailsAtom, transactionUpdatesAtom };