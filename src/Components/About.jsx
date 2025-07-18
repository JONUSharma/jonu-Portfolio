import React from 'react'
import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaGithub, FaLinkedin } from 'react-icons/fa'

const About = () => {
    return (
        <div className="bg-black min-h-screen overflow-hidden text-white py-10 px-5 md:px-20">

            {/* About Me */}
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center justify-between mb-16"
            >
                <div className="md:w-2/3 space-y-5">
                    <h1 className="text-4xl font-bold text-center md:text-left">💻 About Me</h1>
                    <p>👋 Hi, I'm <span className="text-purple-700 text-2xl cursor-pointer font-semibold">Jonu Sharma</span>, a passionate Web Developer focused on building clean, responsive, and interactive web applications. I specialize in <span className="text-purple-400">ReactJS, Node.js, Express, MongoDB, and Tailwind CSS</span>, turning creative ideas into user-friendly digital experiences.</p>
                    <p>🌱 My journey started out of curiosity, and it grew into a full-time passion. From crafting landing pages to developing full-stack apps — every challenge keeps me learning and growing.</p>
                    <p>💡 Always eager to explore new tech and trends, I focus on performance, animation, and smooth user experiences.</p>
                    <p>📈 My goal: Keep evolving, build meaningful projects, and contribute to the dev community.</p>
                </div>

                <motion.img 
                    src="/Image/profile.jpg"
                    alt="Profile"
                    className="w-60 h-64 md:w-[380px] md:h-[350px] mt-10 md:mt-4 rounded-full shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                />
            </motion.div>

            {/* What I Do */}
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-purple-400/20 to-white/5 p-8 rounded-2xl shadow-lg mb-16"
            >
                <h2 className="text-3xl font-bold text-center mb-6">🎯 What I Do</h2>
                <div className="space-y-4 text-lg text-center">
                    <p>⚡ Frontend Development with ReactJS and Tailwind CSS</p>
                    <p>📱 Responsive Website Design for all devices</p>
                    <p>🚀 Deployment & Hosting with Netlify, Vercel, and Render</p>
                    <p>🎨 Clean UI Design with animations & micro-interactions</p>
                </div>
            </motion.div>

            {/* Let's Connect */}
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
            >
                <h2 className="text-3xl font-bold mb-4">📬 Let’s Connect!</h2>
                <p className="mb-3 text-lg">Open for collaborations, freelance projects, or a casual tech chat.</p>
                <p className="mb-6 text-lg">Reach out via my Contact page or connect on social platforms:</p>

                {/* Social Links */}
                <div className="flex justify-center space-x-6 text-3xl">
                    <a href="https://github.com/JONUSharma" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition text-white">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/jonu-sharma-a316b3275/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition text-blue-800">
                        <FaLinkedin />
                    </a>
                </div>
            </motion.div>
        </div>
    )
}

export default About
