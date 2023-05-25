import React from 'react'

import Services from "./Services"
import  Contact  from "./Contact"
import Hero from './Hero'
import Footer from './Footer'
import  Business  from './Business'
import styles from '../style'
import NavBar from './Navbar'
import Stats from './Stats'
import Good from './Good'


const Home = () => {
  return (
    <div>
    
         <div className='w-full bg-primary'>
   <div className={`${styles.paddingX} ${styles.flexCenter} `}>
     <div className={`${styles.boxWidth} `}>
       <NavBar/>
     </div>
   </div>

   <div className={`bg-primary ${styles.flexStart}`}>
     <div className={`${styles.boxWidth}`}>
     <Hero />
     </div>
   </div>

   <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
     <div className={`${styles.boxWidth}`}>
      <Stats />
         <Business/>
      <Services />
      <Contact />
     < Footer/> 
    </div>
   </div>
 </div>
    </div>
  )
}

export default Home