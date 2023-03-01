import React from 'react'
import { Link } from "react-router-dom"
import styles from '../../../style'

const SidebarItems = ({locationNow, itemPath, itemName, icon }) => {
  return (
      <Link to={itemPath} 
      className={`flex items-center gap-3 p-3 rounded-sm hover:bg-gray-500 opacity-70 text-white ${locationNow.pathname.includes(itemPath) && " bg-blue opacity-100 text-white font-bold hover:bg-blue"}
      `}> <img src={icon} alt="" />
      <p className={`${styles.sidebartext}`}>{itemName}</p>
    </Link>
  )
}

export default SidebarItems