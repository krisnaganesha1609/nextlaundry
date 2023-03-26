import { Loading } from '@nextui-org/react';
import React, { useEffect, useState} from 'react'
import { Outlet, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { authAtom } from '../../logic/atoms/auth';
import { usersAtom } from '../../logic/atoms/users';
import { getRequest } from "../../helper/axios-client";
import Sidebar from './component/Sidebar';

const MainLayout = () => {

    const navigate = useNavigate();
    const [user, setUser] = useRecoilState(usersAtom);
    const [token, setToken] = useRecoilState(authAtom);
    const [loading, setLoading] = useState(false);

    const jwtCheck = () => {
        const token = localStorage.getItem("token");
        const user = JSON.parse(localStorage.getItem("user"));

        if (!token || user["role"] !== "admin") {
            navigate("/auth");
            return;
        } else {
            getRequest("api/nextlaundry/validate", `Bearer ${token}`)
                .then(() => {
                    setUser(user);
                    setToken(token);
                })
                .catch((err) => {
                    console.log(err);
                    localStorage.clear();
                    navigate("/auth");
                });
        }
    };

    useEffect(() => {
        try {
            jwtCheck()
        } catch(error) {
            console.log(error)
            
        } finally {
            setLoading(false)
        }
    }, []);

    if(loading || user === "" || token === "" ) {
        return (
            <div className="flex justify-center items-center h-[100vh] flex-col bg-black">
                <Loading type="points-opacity" size='xl'/>
            </div>
        )
    } else {
        return (
            <>
                <div className="flex flex-col md:grid md:grid-cols-11">
                    <div className="md:col-span-2 drop-shadow-xl">
                        <Sidebar />
                    </div>
                    <main className="md:col-span-9 mt-24 md:mt-0">
                        <Outlet />
                    </main>
                </div>
            </>
        )
    }
  
}

export default MainLayout