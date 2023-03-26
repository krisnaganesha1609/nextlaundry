import { Helmet } from 'react-helmet-async'
import styles from '../../style'
import { eye, closeEye } from '../../assets'
import React, { useRef, useState} from 'react';
import { useRecoilState } from 'recoil';
import { authAtom } from '../../logic/atoms/auth';
import { usersAtom } from '../../logic/atoms/users';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import { postRequest } from "../../helper/axios-client";

const Auth = () => {
  const [toggle, setToggle] = useState(false)
  const [loading, setLoading] = useState(false);
  const usernameRef = useRef()
  const passwordRef = useRef()
  const navigate = useNavigate()
  const [, setUser] = useRecoilState(usersAtom);
  const [, setToken] = useRecoilState(authAtom);
  const loginHandler = async (ev) => {
    ev.preventDefault();
    const id = toast.loading("Letting You In...");
    setLoading(true);
    try {
      const req = await postRequest("api/auth", JSON.stringify({
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      }))
      if (req.status === 200) {
        setToken(req.data["token"]);
        setUser(req.data["user"]);

        localStorage.setItem("token", req.data["token"]);
        localStorage.setItem("user", JSON.stringify(req.data["user"]));

        toast.update(id, {
          render: req.data["message"],
          type: "success",
          isLoading: false,
          autoClose: 2000,
        });
        if (req.data["user"]["role"] === "admin") {
          navigate("/admin/dashboard");
        } else if (req.data["user"]["role"] === "kasir") {
          navigate("/cashier/dashboard");
        } else if (req.data["user"]["role"] === "owner"){
          navigate("/owner/dashboard");
        }
      } else if(req.status === 500){
        toast.update(id, {
          render: "Error Happened. Try Again Later!",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
      }
    } catch (error) {
      if (error.code.includes("ERR_BAD_RESPONSE")) {
        toast.update(id, {
          render: "User with this credentials not found",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
        return;
      }
      toast.update(id, {
        render: `${error}`,
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
      console.error(error);
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
        <div className={`h-screen latar-auth md:bg-contain bg-cover w-full md:flex md:items-end`}>
          <p className={`md:block hidden font-righteous font-medium ${styles.copyright} opacity-30 pb-5 pl-10 w-[700px]`}>&copy;Copyright @ 2023 NextLaundry. All Rights Reserved.</p>
          <div className={`bg-purple w-full border-b-4 border-gray-100 border-l-4 border-t-4 md:border-r-0 border-r-4 rounded-l-2xl md:rounded-r-none rounded-r-2xl md:h-screen`}>
            <div className={`${styles.flexCenter} flex-col w-full md:my-10 my-2`}>
              <h1 className={`${styles.authHeading} text-center`}>
                AUTHENTICATION REQUIRED!
              </h1>
              <p className={`${styles.paragraph} text-center`}>SEE IF YOU CAN PASS OUR AUTH SYSTEM TO GET INTO ADMIN DASHBOARD</p>
              <br />
              <form className="flex flex-col md:w-1/2 w-3/4" onSubmit={loginHandler}>
                <div className='bg-sky-50/[0.5] border-2 border-gray-100 rounded-lg'>
                  <input name='username' autoComplete='off'  disabled={loading} type="text" ref={usernameRef} required className='w-full font-righteous bg-transparent border-none focus:outline-none p-5 text-white placeholder:text-white placeholder:font-righteous' placeholder='Username' />
                </div>
                <div className='bg-sky-50/[0.5] border-2 border-gray-100 rounded-lg mt-10 flex flex-row'>
                  <input name='password' autoComplete='off' disabled={loading} type={toggle ? "password" : "text"} ref={passwordRef} required className='w-full font-righteous bg-transparent border-none focus:outline-none p-5 text-white placeholder:text-white placeholder:font-righteous' placeholder='Password' />
                  <button type='button' className='mr-5' onClick={() => setToggle(!toggle)}><img src={toggle ? eye : closeEye} alt="" className='w-[32px] h-[32px]' /></button>
                </div>
                <div className='bg-blue border-2 border-gray-100 rounded-lg mt-10'>
                  <button type="submit" disabled={loading} className='w-full font-righteous bg-transparent border-none focus:outline-none p-5 text-white placeholder:text-white placeholder:font-righteous'>  LET ME IN</button>
                </div>
              </form>
              <div className={`bg-whiteGrey container w-1/2 h-[5px] rounded-[50px] my-10`}>
              </div>
              <p className={`${styles.paragraph} w-1/2 text-center`}>
                ONLY ADMIN, CASHIER, AND OWNER ARE ALLOWED!
                DON'T EVEN TRY TO DO BRUTE FORCING
                OR USING SQL INJECTION</p>
            </div>
          </div>
          <p className={`md:hidden block font-righteous font-medium ${styles.copyright} opacity-30 text-center w-[700px ]`}>&copy;Copyright @ 2023 NextLaundry. All Rights Reserved.</p>
        </div>

      </div>
    </>


  )
}

export default Auth