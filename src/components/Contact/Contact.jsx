import React from 'react'
import './contact.css'
import { MdEmail } from 'react-icons/md'
import { FaFacebookMessenger } from 'react-icons/fa'
import { RiWhatsappFill } from 'react-icons/ri'




const Contact = () => {
  return (
      <section id='contact'>
         <h5>Get In Touch</h5>
         <h2>Contact Me</h2>

         <div className='container contact_container'>
            <div className='contact_options'>
              <article className='contact_option'>
                <MdEmail className='contact_option-icon'/>
                <h4>Email</h4>
                <h5>ankitspatel1711@gmail.com</h5>
                <a href="mailto:ankitspatel1711@gmail.com" target='__blank'>Send a Message</a>
              </article>
              <article className='contact_option'>
                <FaFacebookMessenger className='contact_option-icon'/>
                <h4>Messager</h4>
                <h5>Ankit Patel</h5>
                <a href="https://www.facebook.com/akki.patel.39982" target='__blank'>Send a Message</a>
              </article>
              <article className='contact_option'>
                <RiWhatsappFill className='contact_option-icon'/>
                <h4>WhatsApp</h4>
                <h5>+1 437 299 9360</h5>
                <a href="https://web.whatsapp.com/send?phone+14372999360" target='__blank'>Send a Message</a>
              </article>
            </div>
            {/* end of contact options */}
            <form action=''>
              <input type="text" name='name' placeholder='Your Full Name' required/>
              <input type="email" name='email' placeholder='Your email' required/>
              <textarea name='message' rows="7" placeholder='Your Message' required> </textarea>
              <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>
         </div>
      </section>
  )
}

export default Contact

// import React from 'react'
// import './contact.css'
// import { MdEmail } from 'react-icons/md'
// import { FaFacebookMessenger } from 'react-icons/fa'
// import { RiWhatsappFill } from 'react-icons/ri'
// import React, { useRef } from 'react';
// import emailjs from 'emailjs-com'



// const Contact = () => {
//   const from = useRef();
//    const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_djobg1w', 'template_rkanpqq', form.current, 'YOUR_PUBLIC_KEY')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };
//   return (
//       <section id='contact'>
//          <h5>Get In Touch</h5>
//          <h2>Contact Me</h2>

//          <div className='container contact_container'>
//             <div className='contact_options'>
//               <article className='contact_option'>
//                 <MdEmail className='contact_option-icon'/>
//                 <h4>Email</h4>
//                 <h5>ankitspatel1711@gmail.com</h5>
//                 <a href="mailto:ankitspatel1711@gmail.com" target='__blank'>Send a Message</a>
//               </article>
//               <article className='contact_option'>
//                 <FaFacebookMessenger className='contact_option-icon'/>
//                 <h4>Messager</h4>
//                 <h5>Ankit Patel</h5>
//                 <a href="https://www.facebook.com/akki.patel.39982" target='__blank'>Send a Message</a>
//               </article>
//               <article className='contact_option'>
//                 <RiWhatsappFill className='contact_option-icon'/>
//                 <h4>WhatsApp</h4>
//                 <h5>+1 437 299 9360</h5>
//                 <a href="https://web.whatsapp.com/send?phone+14372999360" target='__blank'>Send a Message</a>
//               </article>
//             </div>
//             {/* end of contact options */}
//             <form ref={form} onSubmit={sendEmail}>
//               <input type="text" name='name' placeholder='Your Full Name' required/>
//               <input type="email" name='email' placeholder='Your email' required/>
//               <textarea name='message' rows="7" placeholder='Your Message' required> </textarea>
//               <button type='submit' className='btn btn-primary'>Send Message</button>
//             </form>
//          </div>
//       </section>
//   )
// }

// export default Contact