import { useState } from 'react'
import { titleLogo, admin, reversefatarrow } from '../../../assets'
import { useLocation, useNavigate } from 'react-router-dom'
import { adminSidebarLinks, historySidebarLinks } from '../../../model/constants'
import SidebarItems from './SidebarItems'
import { Spacer } from '@nextui-org/react'
import styles from '../../../style'
import { useRecoilState } from "recoil";
import { authAtom } from '../../../logic/atoms/auth';
import { usersAtom } from '../../../logic/atoms/users';
import { postRequest } from '../../../helper/axios-client'
import { toast } from 'react-toastify'

const Sidebar = () => {
  const locationNow = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [, setUser] = useRecoilState(usersAtom);
  const [, setToken] = useRecoilState(authAtom);

    const logoutHandler = async (ev) => {
      const token = localStorage.getItem("token");
      ev.preventDefault();
      const id = toast.loading("Letting You Out...");
      setLoading(true);
      try {
        const req = await postRequest("api/nextlaundry/admin/logout", null, `Bearer ${token}`)
        if (req.status === 200) {
          setToken("");
          setUser("");

          localStorage.clear()

          toast.update(id, {
            render: req.data["message"],
            type: "success",
            isLoading: false,
            autoClose: 2000,
          });
          navigate("/auth")
        } else if (req.status === 500) {
          toast.update(id, {
            render: "Error Happened. Try Again Later!",
            type: "error",
            isLoading: false,
            autoClose: 3000,
          });
        }
      } catch (error) {
        toast.update(id, {
          render: `${error}`,
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  return (
    <>
          <nav className="bg-purple pl-6 pr-6 py-7 justify-center h-screen w-full sidebarSticky border-t-2 border-r-2 border-b-2 border-white rounded-br-xl rounded-tr-xl hidden md:flex">
              <div className="w-full my-5 gap-1 flex flex-col">
                  <div className="mb-4 -mt-8">
                      <img src={titleLogo} alt="logo" className="w-full" />
                  </div>

                  <div className='flex justify-center items-center '><img src={admin} alt="" /><h5 className="font-medium text-white pt-2">Admin</h5></div>
                  

                    <div className={`bg-white container w-full h-[2px] my-3`}>
                    </div>

                  {adminSidebarLinks.map((item, i) => (
                      <SidebarItems
                          key={i}
                          locationNow={locationNow}
                          itemPath={item.itemPath}
                          itemName={item.itemName}
                          icon={item.icon} />
                  ))}
                  <div className={`bg-white container w-full h-[2px] my-3`}>
                  </div>

                  {historySidebarLinks.map((item, i) => (
                    <SidebarItems
                        key={i}
                        locationNow={locationNow}
                        itemPath={item.itemPath}
                        itemName={item.itemName}
                        icon={item.icon}
                    />
                  ))}
                  <Spacer />
                  <div className={`flex flex-col gap-6`}>
                      <div className={`bg-white container w-full h-[2px] my-3`}>
                      </div>
                      <form onSubmit={logoutHandler}>
                        <button type="submit" disabled={loading}
                          className={`flex items-center gap-3 p-3 rounded-sm w-full hover:bg-gray-500 opacity-70 text-white}
                                `}> <img src={reversefatarrow} alt="" />
                          <p className={`${styles.sidebartext}`}>LET ME OUT</p>
                        </button>
                      </form>  
                  </div>
              </div>
          </nav>
    </>
  )
}

export default Sidebar