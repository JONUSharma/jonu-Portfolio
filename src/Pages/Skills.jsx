import { motion,  } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa'
import { SiTailwindcss, SiExpress, SiMongodb, SiGithub,SiPostman, SiNetlify,SiVercel } from 'react-icons/si'
const categories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
      { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
      { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
      { name: 'ReactJS', icon: <FaReact className="text-cyan-400" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" /> },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'NodeJS', icon: <FaNodeJs className="text-green-500" /> },
      { name: 'ExpressJS', icon: <SiExpress className="text-gray-300" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
      { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'GitHub', icon: <SiGithub className="text-white" /> },
      { name: 'Netlify', icon: <SiNetlify className="text-cyan-400" /> },
      { name: 'Vercel', icon: <SiVercel className="text-white" /> },
    ],
  },
]



const Skills = () => {
  return (
    <div className="bg-gradient-to-r from-black via-purple-950 to-black py-16 relative overflow-hidden">
      <h2 className="text-4xl text-center text-white font-bold mb-12">💻 My Skills</h2>

      {/* Categories */}
      <div className="max-w-6xl mx-auto space-y-12">
        {categories.map((category, catIndex) => (
          <div key={catIndex}>
            <h3 className="text-2xl text-gray-300 mb-6">{category.title}</h3>

            <div className="overflow-hidden whitespace-nowrap">
              <motion.div
                className="flex gap-12"
                animate={{ x: ['0%', '-100%'] }}
                transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
              >
                {category.skills.concat(category.skills).map((skill, index) => (
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    key={index}
                    className="flex flex-col items-center justify-center w-28 h-28 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg text-white"
                  >
                    <div className="text-4xl mb-2">{skill.icon}</div>
                    <span className="text-sm">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
