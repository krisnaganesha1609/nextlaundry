import styles from "../../../style"
import { titleLogo, mail, location, at } from "../../../assets"

const Footer = () => {
  return (
    <section className={`flex-col ${styles.paddingY} ${styles.paddingX}`}>
      <div className={`grid grid-cols-4 gap-4 w-full space-x-20 `}>
        <div className={`flex-col`}>
          <img src={titleLogo} alt="NEXTLAUNDRY" className="w-[336px] h-[40px] mb-5"></img>
          <p className={` ${styles.paragraph} container w-full`}>
            Lorem ipsum dolor sit amet consectetur. Purus tempus tincidunt massa laoreet in non.
          </p>
        </div>
        <div className="flex-col">
          <p className={` ${styles.paragraph} container w-full`}>
            Company
          </p>
          <ul className="list-none font-righteous text-white -ml-1">
            <li>About Us</li>
            <li>Our Services</li>
            <li>Partners</li>
            <li>Articles</li>
          </ul>
        </div>
        <div className="flex-col">
          <p className={` ${styles.paragraph} container w-full`}>
            Support
          </p>
          <ul className="list-none font-righteous text-white -ml-1">
            <li>Help Center</li>
            <li>FAQ</li>
            <li>Contact Us</li>
            <li>Ticket Support</li>
          </ul>
        </div>
        <div className="flex-col w-full">
          <p className={` ${styles.paragraph} container w-full`}>
            Contact Info
          </p>
          <ul className="list-none font-righteous text-white -ml-2">
            <li className="flex "><img src={location} className='mr-3'/>Jl. Kliningan No. 6, Turangga</li>
            <li className="flex "><img src={mail} className='mr-3' />nextlaundry@gmail.com</li>
            <li className="flex "><img src={at} className='mr-3' />exam_nextlaundry_official</li>
          </ul>
        </div>
      </div>
      <div className={`w-full border-t-4 my-5`} color="white"></div>
      <div className={`w-full flex items-end`}>
        <p className={`text-right font-righteous font-medium ${styles.copyright} opacity-55 pb-5 pl-10 w-full`}>&copy;Copyright @ 2023 NextLaundry. All Rights Reserved.</p>
      </div>
    </section>
  )
}

export default Footer