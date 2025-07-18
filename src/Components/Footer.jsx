import React from "react";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import { FaArrowRight, FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import shape3 from "/Image/contactBottom1.png";

const Footer = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col md:flex-row w-full">
            {/* Left: Contact CTA */}
            <div className="relative md:bottom-10 h-[500px] md:rounded-tr-xl  w-full md:w-1/2 bg-gradient-to-r from-pink-600 to-red-500 p-12 flex flex-col justify-center items-center overflow-hidden  ">
                {/* Background Shapes */}

                <img src={shape3} alt="" className="absolute w-full bottom-20 opacity-30 -rotate-12" />


                {/* CTA Content */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-center text-white space-y-6 max-w-xl z-10"
                >
                    <p className="tracking-widest text-sm uppercase font-semibold">Ready to do this</p>

                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                        Let's get <br /> to work
                    </h1>

                    <motion.button
                        whileHover={{ scale: 1.07 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate("/contact")}
                        className="mt-6 inline-flex items-center gap-3 border-2 border-white text-white px-6 py-3 rounded-full text-sm tracking-wider hover:bg-white hover:text-pink-600 transition-all duration-300"
                    >
                        Contact Us <FaArrowRight />
                    </motion.button>
                </motion.div>
            </div>

            {/* Right: Footer */}
            <div className=" md:w-[800px] bg-[#00010C] text-gray-300 p-6 md:p-12 flex flex-col  rounded justify-between">
                <div className="flex flex-col md:flex-row md:justify-evenly gap-10  text-[#c6c9d8] font-bold opacity-75 w-full pt-10">

                    {/* Quick Link Section */}
                    <div className="space-y-5 md:w-1/2">
                        <h1 className="text-2xl mb-4 md:mb-[30px]">Quick Link</h1>
                        <ul className=" mb-6 md:mb-8 pb-5  ">
                            <NavLink to="/"  rel="noopener noreferrer" >
                                <li className="hover:text-purple-600 cursor-pointer mb-2 ">Work</li>
                            </NavLink>
                            <NavLink to="/about"  rel="noopener noreferrer">
                                <li className="hover:text-purple-600 cursor-pointer mb-2">About</li>
                            </NavLink>
                            <NavLink to="/contact">
                                <li className="hover:text-purple-600 cursor-pointer mb-2">Let's Talk</li>
                            </NavLink>
                        </ul>
                    </div>

                    {/* Say Hello Section */}
                    <div className="space-y-5 md:w-1/2">
                        <h3 className="text-2xl mb-4 md:mb-[30px]">Say Hello</h3>
                        <p className="mb-6 md:mb-10 cursor-pointer hover:text-purple-600 hover:scale-105 transition-transform duration-200">
                            jonusharma4440@gmail.com
                        </p>
                        <span className="flex gap-5 text-xl">
                            <a href="https://ww.facebook.com/jonu.sharma.988" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-2 transition-transform">
                                <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
                            </a>
                            <a href="https://www.linkedin.com/in/jonu-sharma-a316b3275/" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-2 transition-transform">
                                <FaLinkedinIn className="hover:text-blue-400 cursor-pointer" />
                            </a>
                            <a href="/" className="hover:-translate-y-2 transition-transform">
                                <FaInstagram className="hover:text-pink-600 cursor-pointer" />
                            </a>
                        </span>
                    </div>

                </div>
                <div className="text-xs text-center border-t border-gray-700 pt-4 mt-6">
                    © 2025 YourCompany. All Rights Reserved.
                </div>
            </div>
        </div>
        // </div >
    );
};

export default Footer;
