import { Helmet } from 'react-helmet-async';
import styles from '../../style';
import { NavBar, Hero} from './section/';

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
                <div className={``}>

                </div>

                
            </div>
        </>
    );
};


export default Landing;