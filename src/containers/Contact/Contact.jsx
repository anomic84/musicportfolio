import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import FormInput from '../../components/FormInput'

const Contact = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Name",
      errorMessage: "Name Needed!",
      label: "Name",

      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "message",
      type: "test",
      placeholder: "Message",
      errorMessage: "Message Needed!",
      label: "Message",

      required: true,
    }
  ]



  const onChange = (e) => {
    console.log(e.target.value)
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  // Emailjs
  const form = useRef();
  const [showMessage, setShowMessage] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    setTimeout(() => { setShowMessage(false) }, 5000)
    emailjs.sendForm(
      'service_cppmwhp',
      'template_o0tflff',
      form.current,
      'MleWwVUQJinZ2ZCbN')
      .then((result) => {
        console.log(result.text);
        console.log("Message sent!");
        setShowMessage(true)

        e.target.reset()
      }, (error) => {
        console.log(error.text);
      });

  };


  console.log(values);
  return (
    <section className='bg-mediabg h-[88vh] flex flex-col justify-center' id="contact">
      < div className="flex justify-center pt-8 "  >
        <h1 className="text-center font-bungee text-7xl pb-3 text-busride">BOOK NOW</h1>
      </div >
      <form ref={form} className='flex flex-col px-8 py-2' onSubmit={sendEmail}>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}

        <button className="my-8 mx-auto  rounded bg-busride text-navnametext font-titan  w-[40%] sm:w-[25%] max-w-[180px] p-2">Send</button>
        {showMessage && <p className="messagesentbg text-scredhover text-lg py-1 duration-300 sm:w-[25%] sm:self-center">Message Sent!</p>}
      </form>
    </section >
  )
}

export default Contact