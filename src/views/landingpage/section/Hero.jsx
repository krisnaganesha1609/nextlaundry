import styles from '../../../style';

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col md:ml-20`} >
      <div className={`w-full xl:px-0 sm:px-16 px-6 space-x-20`} >
        <div className={`flex flex-row justify-start items-center`}>
          <div className={`absolute bg-magenta container w-[16px] h-[150px] rounded-[50px] mt-10`}>
          </div>
          <div className={`flex flex-col font-righteous font-semibold z-20 ml-10`}>
            <p className={`pt-44 text-2xl ${styles.copyright}`}>
              Profesionnal Laundry Service.
            </p>
            <h1 className={`${styles.heading2}`}>
                Better Way, <br/>For Better Day!
            </h1>
            <p className={`pt-5 text-2xl ${styles.paragraph} container w-3/4`}>
              Lorem ipsum dolor sit amet consectetur. Purus tempus tincidunt massa laoreet in non.
            </p>
            <div className={`border-4 rounded-none p-5 container w-1/4 text-center hover:bg-magenta hover:cursor-pointer`}>
              <a href="" className='text-white font-medium'>Discover More!</a>
            </div>
          </div>
        </div>
      </div>
          
    </section>
  )
}

export default Hero