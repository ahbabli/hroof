import React from 'react'
import { assets } from '../assets/assets'


const Footer = () => {
  return (
    <div className='flex justify-center flex-col items-center text-center font-mono mt-[300px] mb-10'>
        <p className='text-white'> للتواصل معي للمزيد من الأفكار أو دعمي بأي مبلغ رمزي</p>
        <div className='flex space-x-1'>
        <a className='bg-white/75 border-2 text-blue-500 p-1 rounded cursor-pointer' href="paypal.me/ahbabli" target='_blank'><p >payPal</p></a>
        <a className='bg-white/75 border-2 w-12 text-black p-1 rounded' href="X.com/ahbabli" target='_blank'><p>X</p></a>
        </div>

    </div>
  )
}

export default Footer