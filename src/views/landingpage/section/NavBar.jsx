import { useState } from 'react';

import { titleLogo, close, menu} from "../../../assets/";
import { navLinks } from '../../../model/constants';

const NavBar = () => {
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="w-full flex flex-wrap justify-center items-center navbar">
            
            <div className="bg-magenta items-center justify-center pl-16 border-b-4 border-gray-100 flex w-full fixed inset-x-0 top-0">
                <img src={titleLogo} alt="NEXTLAUNDRY" className="w-[336px] h-[40px]"/>
                <div className="bg-purple w-full border-b-4 border-gray-100 border-l-4 ml-28 rounded-bl-full py-1">

                    <ul className="list-none sm:flex hidden justify-end items-center ml-28">
                        {navLinks.map((nav, index) => (
                            <li key={nav.id
                            } className={
                                `font-righteous font-normal cursor-pointer w-full text-[20px]
                            
                            ${index === navLinks.length - 1 ? "w-1/5 mr-5" : ""}`}
                                onClick={() => setActive(nav.title)}>
                                <a href={`#${nav.id}`} className={`flex flex-wrap ${active === nav.title ? "text-magenta" : "text-white"} `}>{nav.title} <img src={nav.dot} className='mx-auto'/></a>


                                <a href={`${nav.id}`}><img src={nav.icon} className='mx-auto' /></a>
                            </li>

                        ))}

                    </ul>
                    <div className="sm:hidden flex flex-1 justify-end items-center">
                        <img
                            src={toggle ? close : menu}
                            alt="menu"
                            className="w-[28px] h-[28px] object-contain"
                            onClick={() => setToggle(!toggle)}
                        />

                        <div
                            className={`${!toggle ? "hidden" : "flex"
                                } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                        >
                            <ul className="list-none flex justify-end items-start flex-1 flex-col">
                                {navLinks.map((nav, index) => (
                                    <li
                                        key={nav.id}
                                        className={`font-righteous font-medium cursor-pointer text-[16px] ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                                        onClick={() => setActive(nav.title)}
                                    >
                                        <a href={`#${nav.id}`} className={`${active === nav.title ? "text-magenta" : "text-white"
                                            }`}>{nav.title}</a>

                                        
                                        <a href={`${nav.id}`}><img src={nav.icon} className='mx-auto' /></a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </nav>
    )
}

export default NavBar