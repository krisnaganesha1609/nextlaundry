import { about } from '../../../assets';
import styles from '../../../style';

const About = () => {
    return (
        <section id="About" className={`flex flex-row md:ml-10`} >
            <div className="flex flex-row">
                <img src={about} className="w-[400px] h-[400px]" />
                <div className="flex flex-col">
                    <h1 className={`text-right w-full ${styles.heading2}`}>
                        Better Way, <br />For Better Day!
                    </h1>
                    <p className={`pt-5 text-right ${styles.paragraph} container w-3/4`}>
                        Lorem ipsum dolor sit amet consectetur. Purus tempus tincidunt massa laoreet in non.
                    </p>
                    <div className="flex-row">
                        icon 15+
                        icon 60+
                    </div>
                </div>
                <div className={`absolute bg-purple container w-[16px] h-[150px] rounded-[50px] mt-10 item-right`}></div>
            </div>
        </section>
    )
}

export default About