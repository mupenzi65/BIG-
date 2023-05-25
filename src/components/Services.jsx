import React from 'react'
import { img1,img2,img3} from '../assets'


const Services = () => {
  return (
    <section id='features' className=' widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-20 p-12'>
        <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
        Our Services
      </h2>
      <p className="mt-2 text-center text-3xl text-slate-500 dark:text-slate-400">
      We offer many services to progress!
      </p>
      <ul className="mx-auto  my-12 flex list-none flex-col items-center gap-8 sm:flex-row">

        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="max-h-[16rem] min-h-[16rem] max-w-[500px] min-w-[500px]">
        <img class=" h-[100%] w-[100%] object-cover rounded  transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={img1} alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-dmserif text-2xl font-bold text-white"> Import and Export</h1>
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">At BIG Inc, we receive and process various shipments every month from both local and international market, including LCL, shipments, and full container</p>
      </div>
    </div>
       
        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div className="max-h-[16rem] min-h-[16rem] max-w-[500px] min-w-[500px]">
        <img class=" w-[100%] h[100%] object-cover rounded transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={img2} alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-dmserif text-2xl font-bold text-white"> Retail & Wholesale</h1>
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">We source various products locally and internationally. We can supply and distribute  various type of products from different manufacturers.</p>
    
      </div>
    </div>
        
        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl h-26 w-92 hover:shadow-black/30">
      <div class="max-h-[16rem] min-h-[16rem] max-w-[500px] min-w-[500px]">
        <img class=" h-[100%] rounded w-[100%] object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={img3} alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-dmserif text-2xl font-bold mb-1 text-white"> General Investment</h1>
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"> At Big Inc ,We deal with a wide range of merchandise and industrial across various sectors including 
          energy, metal, and construction markets. We also boast robust relationships with leading suppliers in the world.</p>
        
      </div>
    </div>
        </ul>
        <hr class="mx-auto w-1/2 bg-black dark:bg-white" />


    </section>
    
  )
}

export default Services