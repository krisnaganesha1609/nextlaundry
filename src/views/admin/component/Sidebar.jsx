import React from 'react'
import { titleLogo, admin } from '../../../assets'
import { useLocation } from 'react-router-dom'
import { adminSidebarLinks, dangerSidebarLinks, historySidebarLinks } from '../../../model/constants'
import SidebarItems from './SidebarItems'
import { Spacer } from '@nextui-org/react'

const Sidebar = () => {
  const locationNow = useLocation();
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
                      {dangerSidebarLinks.map((item, i) => (
                          <SidebarItems
                              key={i}
                              locationNow={locationNow}
                              itemPath={item.itemPath}
                              itemName={item.itemName}
                              icon={item.icon} />
                      ))}
                  </div>
              </div>
          </nav>
    </>
  )
}

export default Sidebar