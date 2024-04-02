import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Pacifico, Poppins } from 'next/font/google';
import toast, {Toaster} from 'react-hot-toast';

interface ContactFormProps {
    api : string
}



const _variants = {
  hover:{
      y:-5,
      transition:{delay:0, duration:0.1}
  },
}


function ContactForm({api} : ContactFormProps) {
  const [state, handleSubmit] = useForm(api);
  const notify = () => toast("Form submitted Successfully!")
  
  return (
    <div
    className='w-full'>
    <section>
      <form onSubmit={handleSubmit} className=''>
        <div className="">
            <div className='flex gap-5'>
                <div className='pb-5 w-1/2'>
                    <p>
                        First Name
                    </p>
                    <input type='text' name='First Name' className=' h-12 rounded-full outline-none bg-gray-100 text-black w-full px-5' />
                </div>
                <div className='pb-5 w-1/2'>
                    <p>
                        Last Name
                    </p>
                    <input type='text' name='Last Name' className=' h-12 rounded-full outline-none bg-gray-100 text-black w-full px-5' />
                </div>
            </div>
            <div className='pb-5 '>
                <p>
                    Phone Number
                </p>
                    <input type='text' name='Phone Number' className=' h-12 rounded-full outline-none bg-gray-100 text-black w-full px-5' />
            </div>
        <div className='pb-5'>
            <p>
                Email Id
            </p>
            <input
            id="email"
            type="email" 
            name="email"
            className='w-full h-12 rounded-full bg-gray-100 outline-none text-black px-5'
            />
        </div>
        <div className='pb-5'>
            <p>
                Individual/ Organisation
            </p>
            <input
            id="email"
            type="text" 
            name="Indivial/Organisation"
            className='w-full h-12 rounded-full bg-gray-100 outline-none text-black px-5'
            />
        </div>
        <div>
            <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            />
        </div>
        <div>
            <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            />
        </div>
        <div
        className='flex font-semibold gap-5'>
            <button type="submit" disabled={state.submitting} onClick={() => notify()} className='rounded-full px-5 py-2 bg-[#5BB483]'>Submit</button>
            <button type='reset' className='lg:text-[18px] text-[15px] italic font-light'>Reset Form</button>
        </div>
        </div>
        <Toaster />
    </form>
    </section>
    </div>
  );
}

function Form({api} : ContactFormProps) {
  return (
    <ContactForm api={api} />
  );
}
export default Form;