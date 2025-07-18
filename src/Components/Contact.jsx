import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoLocation } from "react-icons/io5";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
const contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const HandleChange = (e) => {
    setIsFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }
  const cards = [
    {
      title: "Contact with phone no.",
      data: "91+ 6005398182",
      icon: <FaPhoneAlt className="" />
    },
    {
      title: "Email address",
      data: "jonusharma4440@gmail.com",
      icon: <CiMail />,
    },
    {
      title: "Location",
      data: "Jammu, Jammu & Kashmir",
      icon: <IoLocation />,

    }
  ]

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "42a0bed0-761e-4b89-975d-42d6e1764cc4");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setIsSubmitted(true)
      toast.success("Your message send successfully")
    }
  };
  return (

    <div className="bg-gray-50">
      {/* image  */}
      <div className="flex justify-center p-10 w-full bg-opacity-55 ">
        <img src="/Image/contact.jpg" alt="bg-contact" className="bg-cover bg-center h-[400px] w-full rounded-lg" />
      </div>
      {/* cards */}
      <div className="md:flex justify-evenly mt-10 p-10">

        {
          cards.map((item, id) => {
            return (
              <span key={id} className="border w-1/4  rounded-lg bg-white text-black">
                <p className=" relative bottom-12 left-2 hover:bg-[#F9004D] hover:text-white  w-20 p-5 text-4xl text-[#f9004D] border rounded-full mb-4">{item.icon}</p>
                <h2 className="text-2xl font-semibold mt-0 relative bottom-5 m-5">{item.title}</h2>
                <p className="text-gray-600 m-5 relative bottom-5">{item.data}</p>
              </span>
            )
          })
        }
      </div>

      {/* contact form */}
      <div className=" flex flex-col lg:flex-row  justify-evenly pl-10 p-16 bg-white rounded-2xl shadow ">

        <div className="w-full  lg:w-1/2 flex flex-col space-y-6">
          <h1 className="text-6xl font-bold">Contact US.</h1>
          <p className=" mt-10 text-lg font-semibold">Open for collaborations, freelance projects, or a casual tech chat.</p>
          <form action="" onSubmit={onSubmit} className="flex flex-col space-y-10">
            <span className="flex flex-col space-y-5">
              <label htmlFor="name" className="text-xl font-semibold">Enter your name</label>
              <input name='name'  type="text" required className=" border rounded p-4 text-lg " placeholder='Enter your fullname...' />
            </span>
            <span className="flex flex-col space-y-5">
              <label htmlFor="email" className="text-xl font-semibold">Enter your email</label>
              <input name='email' type="email"  required className="p-4 text-lg border rounded " placeholder='example@gmail.com' />
            </span>
            <span className="flex flex-col space-y-5">
              <label htmlFor="message" className="text-xl font-semibold"> Enter your message here...</label>
              <textarea name="message"  required className="p-3 border rounded" placeholder="Your message"></textarea>
            </span>

            <button type='submit' className="text-2xl bg-[#F9004D] hover:bg-white hover:text-[#F9004D] hover:border-2 hover:border-[#F9004D] hover:-translate-y-2 text-white w-2/5 p-4 rounded-2xl">Submit</button>
          </form>
        </div>

        <div className="lg:w-2/4 w-full ml-10 ">
          <img src="/Image/contactus.svg" alt="img" className="mb-10 w-full lg:w-[600px] rounded-xl" />
        </div>

      </div>
      <Toaster />
    </div>
  )
}

export default contact
