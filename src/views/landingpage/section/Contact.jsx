import styles from '../../../style';

const Contact = () => {
    return (
        <section id="About" className={`flex md:flex-row flex-col ${styles.paddingX}`} >
            <div className={`w-full xl:px-0 sm:px-16 px-6 space-x-20`} >
                <div className={`flex flex-row justify-start items-center`}>
                    <div className={`bg-magenta container w-[16px] h-[150px] rounded-[50px] mt-10`}>

                    </div>
                    <div className={`flex flex-col font-righteous font-semibold ml-10`}>
                        <p className={`underline underline-offset-4 pt-44 text-2xl ${styles.copyright}`}>
                            Contact
                        </p>
                        <h1 className={`${styles.heading2}`}>
                            Ready to get laundry <br /> service?
                        </h1>
                        <p className={`pt-5 text-2xl ${styles.paragraph} container w-3/4`}>
                            Lorem ipsum dolor sit amet consectetur. Purus tempus tincidunt massa laoreet in non.
                        </p>
                        <div className={`border-4 rounded-none p-5 container w-1/4 text-center hover:bg-magenta hover:cursor-pointer`}>
                            <a href="" className='text-white font-medium'>Contact Us!</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact