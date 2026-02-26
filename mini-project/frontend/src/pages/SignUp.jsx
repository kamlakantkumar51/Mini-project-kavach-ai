import React from 'react'
import bg from '../assets/authBg.png'
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { userDataContext } from '../context/UserContext';

function SignUp() {
  const [showPassword, setShowPassword] = React.useState(false);
  const {serverUrl} = React.useContext(userDataContext);
  const navigate = useNavigate();
  const[name,setName]  = React.useState(""); 
  const[email,setEmail]  = React.useState("");
  const[password,setPassword]  = React.useState("");
  const handleSignUp = async(e)=>{
    e.preventDefault(h
      
    )
    try {
      let result = await axios.post(`${serverUrl}/api/auth/signup`,{
        name,email,password

      },{withCredentials:true})
      console.log(result);
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div
      className='w-full h-[100vh] bg-cover flex justify-center items-center'
      style={{ backgroundImage: `url(${bg})` }}
    >
      <form className='w-[90%] h-[600px] max-w-[500px] bg-[#00000062] backdrop-blur shadow-lg shadow-black flex flex-col justify-center gap-[20px] px-[20px]' onSubmit={handleSignUp}>

        <h1 className='text-white text-[30px] font-semibold mb-[30px] text-center'>
          Register to <span className='text-blue-400'>Virtual Assistant</span>
        </h1>

        <input
          type="text"
          placeholder='Enter your Name'
          className='w-full h-[60px] outline-none border-2 border-white bg-transparent text-white placeholder-gray-300 px-[20px] py-[10px] rounded-full text-[18px] required onChange = {(e)=>setName(e.target.value)} value = {name}'
        />

        <input
          type="email"
          placeholder='Email'
          className='w-full h-[60px] outline-none border-2 border-white bg-transparent text-white placeholder-gray-300 px-[20px] py-[10px] rounded-full text-[18px] required onChange = {(e)=>setEmail(e.target.value)} value = {email}'
        />

        <div className='w-full h-[60px] border-2 border-white bg-transparent text-white rounded-full text-[18px] relative flex items-center'>
          <input
            type={showPassword ? "text" : "password"}
            placeholder='Password'
            className='w-full h-full rounded-full outline-none bg-transparent px-[20px] pr-[55px] required onChange = {(e)=>setPassword(e.target.value)} value = {password}'
          />

          <div
            className='absolute top-[18px] right-[20px] w-[25px] h-[25px] text-white cursor-pointer z-10'
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>

        <button className='w-[150px] h-[45px] mx-auto mt-[10px] text-black font-semibold bg-white rounded-full text-[16px]'>
          Sign Up
        </button>
        <p className='text-white text-[18px] text-center'>
          Already have an account ?{' '}
          <span
            className='text-blue-400 cursor-pointer'
            onClick={() => navigate("/signin")}
          >
            Sign In
          </span>
        </p>

      </form>
    </div>
  )
}

export default SignUp;