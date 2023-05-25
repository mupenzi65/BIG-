import React from 'react'
import { img1,img2,img3 } from '../assets'

const Good = () => {
  return (
    <div class="flex  items-center justify-center mt-9">
  <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10">
    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div className="max-h-66 w-[500px]">
        <img class="w-[100%] h[100%] transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={img1} alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-dmserif text-3xl font-bold text-white">Beauty</h1>
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
        <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
      </div>
    </div>
    </div>
    </div>
    

      
  
 


  )
}

export default Good