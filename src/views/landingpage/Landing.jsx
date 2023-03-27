import { Helmet } from 'react-helmet-async';
import styles from '../../style';
import { NavBar, Hero, About, Service, Contact, Footer } from './section/';

const Landing = () => {
    return (
        <>
            <Helmet>
                <title>
                    Welcome | NEXTLAUNDRY
                </title>
            </Helmet>
            <div className="w-full overflow-hidden">
                <div className={` ${styles.flexCenter}`}>
                    <div className={` ${styles.boxWidth} z-20`}>
                        <NavBar />
                    </div>
                </div>

                <div className={`h-screen latar-hero mt-20 z-0`}>
                    <Hero />
                </div>
                <div className={`h-screen latar-about`}>
                    <About />
                </div>
                <div className={`h-screen bg-black`}>
                    <div className='latar-service'>
                        <Service />
                    </div>
                </div>
                <div className={`h-screen latar-contact`}>
                    <Contact />
                </div>
                <div className={`latar-footer`}>
                    <Footer />
                </div>


            </div>
        </>
    );
};


export default Landing;