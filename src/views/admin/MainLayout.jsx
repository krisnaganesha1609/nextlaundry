import React from 'react'
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from './component/Sidebar';

const MainLayout = () => {
    const navigate = useNavigate();

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

export default MainLayout