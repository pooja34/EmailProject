import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const EmailContactForm = () => {
 const form = useRef();

 const sendEmail = (e) => {
     debugger;
   e.preventDefault(); // prevents the page from reloading when you hit “Send”

   emailjs.sendForm('service_4bujoch','template_spdfp4a', form.current, 'kFhDum-CtGm2LJMhd')
     .then((result) => {
         console.log(result.data)
      //  window.location.reload() 
         // show the user a success message
     }, (error) => {
        console.log(error.text);

         // show the user an error
     });
 };

 return (
  <div className='row'>
  <div className='col'></div>
  <div className='col'>
  <div className='form'>
   <form ref={form} onSubmit={sendEmail}>
   <div className='mb-3'><label  htmlFor=''>Name</label>
     <input type="text" name="user_name"className='form-control' /></div>
     <div className='mb-3'><label  htmlFor=''>Email</label>
     <input type="email" name="user_email"className='form-control' /></div>
     <div className='mb-3'> <label  htmlFor=''>Message</label>
     <textarea name="message" className='form-control' /></div>
     <button type="submit" value="Send"  style={{ marginTop: 10 }}
              className='btn btn-success'>Send</button>
   </form>
   </div>
   </div>
      <div className='col'></div>
    </div>  
 );
};

export default EmailContactForm;
