import { useState, useEffect } from 'react'
import TopbarProfile from './TopbarProfile';

const Topbar = ({ title }) => {
    const [greeting, setGreeting] = useState("");

    useEffect(() => {
        const now = new Date().getHours();
        if (4 <= now && now <= 11) {
            setGreeting({
                emoji: "🌄",
                greet: "Good Morning, ",
            });
        } else if (12 <= now && now <= 14) {
            setGreeting({
                emoji: "🌞",
                greet: "Good Afternoon, ",
            });
        } else if (15 <= now && now <= 18) {
            setGreeting({
                emoji: "🌆",
                greet: "Good Evening, ",
            });
        } else {
            setGreeting({
                emoji: "🌃",
                greet: "Good Night, ",
            });
        }
    }, [])
    return (
        <nav className="hidden md:flex shadow-sm bg-white py-3 px-5 border-b-[1px] border-b-gray-300 items-center sticky top-0 z-30 justify-between drop-shadow-xl">
            <h5 className="text-[26px] font-semibold font-righteous my-3 mx-5">
                <span>{title}</span>
            </h5>
            <div className='flex items-center gap-6'>
                <TopbarProfile emoji={greeting.emoji} greet={greeting.greet} />
            </div>
        </nav>
    )
}

export default Topbar