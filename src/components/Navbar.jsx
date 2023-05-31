import React, { useState } from 'react'
import {FaBars,FaTimes,FaGithub,FaLinkedin} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'


 
const Navbar = () => {
  const [nav,setNav]=useState(false)
  const handleClick=()=>setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
<div className='pname'>KEVIN's PORTFOLIO</div>

  <ul className=' hidden md:flex'>
    <li> <a className='border-b-4 border-pink-600' href='/'>Home</a></li>
    <li> <a className='border-b-4 border-pink-600' href='/skills'>Skills</a></li>
    <li> <a className='border-b-4 border-pink-600' href='/projects'>Projects</a></li>
  </ul>

<div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
  {!nav ?<FaBars/>: <FaTimes/>}
</div>

{/*mobile menu*/}
<ul className={!nav?'hidden':'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
    <li className='py-6 text-4xl'><a className='border-b-4 border-pink-600' href='/'>Home</a></li>
    <li className='py-6 text-4xl'><a className='border-b-4 border-pink-600' href='/projects'>Projects</a></li>
    <li className='py-6 text-4xl'><a className='border-b-4 border-pink-600' href='/skills'>Skills</a></li>
  </ul>

  {/*social icons*/}
  <div className='hidden lg:flex flex-col fixed top-[35%] left-0'>
<ul>
  <li className='w-[155px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
    <a className='w-full flex justify-between items-center text-gray-300'
    href='https://www.linkedin.com/in/kevinshah12/' target='_blank'>Linkein <FaLinkedin size={30}/>
    </a>
  </li>
  <li className='w-[155px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
    <a className='w-full flex justify-between items-center text-gray-300'
    href='https://github.com/KEVINs121998' target='_blank'>Github <FaGithub size={30}/>
    </a>
  </li>
  <li className='w-[155px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
    <a className='w-full flex justify-between items-center text-gray-300'
    href='https://drive.google.com/file/d/1hRe28x2LhjYe6OsEqc_8CeSMYAydyeOb/view?usp=share_link' target='_blank'>Resume <BsFillPersonLinesFill size={30}/>
    </a>
  </li>
</ul>
  </div>

    </div>
  
  )
}

export default Navbar