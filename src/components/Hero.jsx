import React from 'react'
import styles from '../style'
import { discount} from '../assets'
import GetStarted from './GetStarted'
import { robot1,heroo,service3 } from '../assets'

const Hero = () =>  (
  <section id='home 'className={`flex md:flex-row flex-col  ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart}  flex-col xl:px-0 sm:px16 px-6`}>
    <div className='flex flex-row items-center  py-[64] px-4 
    bg-discount-gradient rounded-[10px] mb-2 ' >
    <img src={discount} alt='discount' className='w-[32px] h-[32px]'/>
     <p className={`${styles.paragraph}ml-2`}>
      <span className='text-white'>At Big we strive 
      </span> Beyond {" "}
      <span className='text-white'>Imagination

      </span> 
     </p>
    </div>
    <div className='flex flex-row justify-between items-center w-full'>
      <h1 className='flex-1 font-poppins font-semibold ss:text-[32px] 
      text-[22px] text-white ss:leading-[60px] leading-[55px]'>
        The best trading company based in  <br className='sm:block hidden'/> {" "}
        <span className='text-gradient'>Canada , Rwanda, Burundi

        </span>{" "}
      </h1>
      <div className="ss:flex hidden md:mr-4 mr-0">
      <GetStarted />
      </div>
    </div>
    <h1 className='font-poppins font-semibold ss:text-[32px] 
      text-[22px] text-white ss:leading-[100px] leading-[75px]'>
      
    </h1>
    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
    We put our best foot forward to be the most efficient
     and professional company in the industry, while promptly
      delivering only the highest quality products and services.
       we place 
    our customers as the first priority in all stages of the
     product and service delivery chain.
    </p>
  </div>
  <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative `}>
    <div className=' lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ' >
     <img src={heroo}  alt="billing" className='w-[100%] h-[100%] object-cover object-center rounded-full'/> 
    </div>
    
    <div className='absolute z-[0] w-[60%] h-[65%] top-0 pink__gradient'/>
    <div className='absolute z-[1] w-[80%] h-[85%] bottom-40  rounded-full white__gradient'/>
    <div className='absolute z-[0] w-[50%] h-[55%] bottom-20 blue__gradient'/>
  </div>
  <div className={`ss:hidden ${styles.flexCenter}`}>
   <GetStarted/>
  </div>

  </section>

  )


export default Hero