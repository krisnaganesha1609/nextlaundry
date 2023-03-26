import { HelmetProvider } from "react-helmet-async"
import { BrowserRouter, Routes, Route} from "react-router-dom"
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
import NotFound from "./views/NotFound";
import CashierLayout from "./views/cashier/CashierLayout";
import OwnerLayout from "./views/owner/OwnerLayout";
import CashierDashboard from "./views/cashier/Dashboard";
import OwnerDashboard from "./views/owner/Dashboard";
import CashierMember from "./views/cashier/Member";
import OwnerTransaction from "./views/owner/Transaction";
import CashierTransaction from "./views/cashier/Transaction";

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
                <Route path="admin" element={<MainLayout />}> 
                    <Route index path="dashboard" element={<Dashboard />} />
                    <Route path="member" element={<Member />} />
                    <Route path="outlet" element={<Outlet />} />
                    <Route path="users" element={<Users />} />
                    <Route path="products" element={<Products />} />
                    <Route path="transaction" element={<Transaction />} />
                    <Route path="log" element={<Log />} />
                </Route>
                <Route path="cashier" element={<CashierLayout />}>
                <Route index path="dashboard" element={<CashierDashboard />} />
                  <Route path="member" element={<CashierMember/>} />
                  <Route path="transaction" element={<CashierTransaction />} />
                </Route>
                <Route path="owner" element={<OwnerLayout />}>
                <Route index path="dashboard" element={<OwnerDashboard />}/>
                  <Route path="transaction" element={<OwnerTransaction />}/>
                </Route>
                <Route path="*" element={<NotFound />}/>
              </Routes>
            </BrowserRouter>
        </RecoilRoot>
      </HelmetProvider>
    </NextUIProvider> 
  )
}

export default App