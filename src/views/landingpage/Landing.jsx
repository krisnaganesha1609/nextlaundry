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
                <div className={` ${styles.flexCenter} z-10`}>
                    <div className={` ${styles.boxWidth}`}>
                        <NavBar />
                    </div>
                </div>

                <div className={`h-screen latar-hero mt-20 z-0`}>
                    <Hero />
                </div>
                <div className={`h-screen latar-about`}>
                    <About />
                </div>
                <div className={`h-screen latar-service`}>
                    <Service />
                </div>
                <div className={`h-screen latar-contact`}>
                    <Contact />
                </div>
                <div className={`h-screen latar-footer`}>
                    <Footer />
                </div>


            </div>
        </>
    );
};


export default Landing;