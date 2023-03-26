import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isAdminSelector } from '../logic/atoms/adminSelector';
import { isCashierSelector } from '../logic/atoms/cashierSelector';
import { isOwnerSelector } from '../logic/atoms/ownerSelector';

import { authAtom } from './../logic/atoms/auth';

export { AdminRoute, CashierRoute, OwnerRoute };

function AdminRoute() {
    const isAuthenticated = useRecoilValue(authAtom);
    const isAdmin = useRecoilValue(isAdminSelector)
    return !isAuthenticated && !isAdmin ? (<Navigate to="/auth" />) : (<Outlet />)
}

function CashierRoute() {
    const isAuthenticated = useRecoilValue(authAtom);
    const isCashier = useRecoilValue(isCashierSelector)
    return !isAuthenticated && !isCashier ? (<Navigate to="/auth" />) : (<Outlet />)
}

function OwnerRoute() {
    const isAuthenticated = useRecoilValue(authAtom);
    const isOwner = useRecoilValue(isOwnerSelector)
    return !isAuthenticated && !isOwner ? (<Navigate to="/auth" />) : (<Outlet />)
}