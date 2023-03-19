import { HelmetProvider } from "react-helmet-async"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { RecoilRoot } from "recoil";
import Auth from "./views/auth/Auth";
import Landing from "./views/landingpage/Landing";
import Dashboard from "./views/admin/Dashboard";
import MainLayout from "./views/admin/MainLayout";
import { NextUIProvider } from '@nextui-org/react'
import Member from "./views/admin/Member";
import 'chart.js/auto';
import Outlet from "./views/admin/Outlet";
import Users from "./views/admin/Users";
import Products from "./views/admin/Products";
import Transaction from "./views/admin/Transaction";
import Log from "./views/admin/Log";

function App() {
  return (
    <NextUIProvider>
      <HelmetProvider>
        <RecoilRoot>
          <ToastContainer />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="auth" element={<Auth />} />
              <Route path="nextlaundry" element={<MainLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="member" element={<Member />}/>
                <Route path="outlet" element={<Outlet />}/> 
                <Route path="users" element={<Users />}/>
                <Route path="products" element={<Products />}/>
                <Route path="transaction" element={<Transaction />} />
                <Route path="log" element={<Log />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </RecoilRoot>
      </HelmetProvider>
    </NextUIProvider> 
  )
}

export default App