import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom';
import styles from '../../style'
import { eye, closeEye } from '../../assets'
import { useRef, useState } from 'react';
import { toast } from 'react-toastify';

const Auth = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(true);
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const loginHandler = async (ev) => {
    ev.preventDefault();
    const id = toast.loading("Loading...")
    setLoading(true);

    try {
      toast.update(id, { render: "Demn, You Have Succeed The Auth System", type: "success", isLoading: false, autoClose: 2000 });
      navigate('/nextlaundry');

    } catch (e) {
      toast.update(id, { render: "Error", type: "error", isLoading: false, autoClose: 3000 });
      navigate('/');
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      <Helmet>
        <title>Authentication | NEXTLAUNDRY</title>
      </Helmet>
      <div className={`flex justify-start items-center`}>
        <div className={`md:h-screen min-h-screen latar-auth w-full flex items-end`}>
          <p className={`font-righteous font-medium ${styles.copyright} opacity-30 pb-5 pl-10 w-[700px]`}>&copy;Copyright @ 2023 NextLaundry. All Rights Reserved.</p>
          <div className={`bg-purple w-full border-b-4 border-gray-100 border-l-4 border-t-4 rounded-l-2xl h-screen`}>
            <div className={`${styles.flexCenter} flex-col w-full my-10`}>
              <h1 className={`${styles.authHeading} text-center`}>
                AUTHENTICATION REQUIRED!
              </h1>
              <p className={`${styles.paragraph}`}>SEE IF YOU CAN PASS OUR AUTH SYSTEM TO GET INTO ADMIN DASHBOARD</p>
              <br />
              <form className="flex flex-col w-1/2" onSubmit={loginHandler}>
                <div className='bg-sky-50/[0.5] border-2 border-gray-100 rounded-lg'>
                  <input type="email" required ref={emailRef} disabled={loading} className='w-full font-righteous bg-transparent border-none focus:outline-none p-5 text-white placeholder:text-white placeholder:font-righteous' placeholder='Email' />
                </div>
                <div className='bg-sky-50/[0.5] border-2 border-gray-100 rounded-lg mt-10 flex flex-row'>
                  <input type={toggle ? "password" : "text"} disabled={loading} ref={passwordRef} required className='w-full font-righteous bg-transparent border-none focus:outline-none p-5 text-white placeholder:text-white placeholder:font-righteous' placeholder='Password' />
                  <button className='mr-5' onClick={() => setToggle(!toggle)}><img src={toggle ? eye : closeEye} alt="" className='w-[32px] h-[32px]' /></button>
                </div>
                <div className='bg-blue border-2 border-gray-100 rounded-lg mt-10'>
                  <button type="submit" disabled={loading} className='w-full font-righteous bg-transparent border-none focus:outline-none p-5 text-white placeholder:text-white placeholder:font-righteous'>LET ME IN</button>
                </div>
              </form>
              <div className={`bg-whiteGrey container w-1/2 h-[5px] rounded-[50px] my-10`}>
              </div>
              <p className={`${styles.paragraph} w-1/2 text-center`}>ONLY ADMIN, CASHIER, AND OWNER ARE ALLOWED!
                DON'T EVEN TRY TO DO BRUTE FORCING
                OR USING SQL INJECTION</p>
            </div>
          </div>
        </div>

      </div>
    </>


  )
}

export default Auth