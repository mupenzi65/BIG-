import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';


export const Contact = () => {
    const form = useRef();

    const [forms, setForms] = useState({
      user_name: "",
      user_email: "",
      message: ""
    })
    const [success, setSuccess] = useState(false);

  
  const sendData = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_pvmm0uf', 'template_pb1cmzb',form.current, 'vCIofNZ5fQiZG3I9M')
      .then((result) => {
          console.log(result.text);
          setForms({user_name: "",
          user_email: "",
          message: ""})

          setSuccess(true);
          setTimeout(()=>{
            setSuccess(false);
          },3000)

      }, (error) => {
          console.log(error.text);
      });
  };

  const update = (event) =>{
    const {name, value} = event.target;
    setForms((PreveData)=>({
    ...PreveData,
    [name]: value

    }))

  }
  console.log(forms);

  

  return (
    
    <section id="contact" className="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-16 p-6">
    <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
      Contact Us
    </h2>
    <form ref={form}  class="items-left mx-auto flex max-w-4xl flex-col gap-4 text-2xl sm:text-3xl">
    <input type="name" id="name" onChange={update} name="user_name" required value={forms.user_name}  placeholder="Your name"
        className="w-full rounded-xl border border-solid bg-slate-900 border-slate-900 p-3 text-2xl text-dimWhite dark:border-none sm:text-3xl" />
      <input type="email" id="subject" onChange={update}  value={forms.user_email} name="user_email" required  placeholder="Your email address"
        className="w-full rounded-xl border border-solid bg-slate-900 border-slate-900 p-3 text-2xl text-dimWhite dark:border-none sm:text-3xl" />
      
      <textarea name="message" onChange={update}  value={forms.message} id="message" cols="30" rows="10" placeholder="Your Message" required
        className="w-full bg-slate-900 rounded-xl  border border-solid border-slate-900 p-3 text-2xl text-dimWhite dark:border-none sm:text-3xl"></textarea>
     
     
     {success &&
      <>
      <div>
        <h1 className='text-dimWhite font-poppins  text-gradient mt-1'>MASSEGE IS SENT SUCCESSFULY</h1>
      </div>
     </>}
      <button onClick={sendData}
        class="w-48 rounded-xl border border-solid border-slate-900 bg-teal-700 p-3 text-white hover:bg-teal-600 active:bg-teal-500 dark:border-none">
        Submit
      </button>
    </form>
  </section>
  )
}
export default Contact