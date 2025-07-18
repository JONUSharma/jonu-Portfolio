import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
const HeroSection = () => {
    const vantaRef = useRef(null);
    const [vantaEffect, setVantaEffect] = useState(null);

    useEffect(() => {
        if (!vantaEffect && window.VANTA) {
            setVantaEffect(
                window.VANTA.DOTS({
                    el: vantaRef.current,
                    color: 0x1a3d3b,        // color of the dots
                    backgroundColor: 0x070a0b, // background color
                    size: 2.00,             // size of the dots
                    spacing: 35.00,         // distance between dots
                    showLines: true,        // connecting lines
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                })


            );
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return (
        <div ref={vantaRef} className="w-full h-[100dvh] min-h-[500px] flex-col flex justify-center items-center gap-10 text-white ">
            <motion.h1
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-3xl md:text-6xl lg:text-7xl font-bold wave-text"><span className="text-slate-500">Hello</span>, I'm Jonu Sharma
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 2 }}
                className="m-2 text-xl ">
                "Hi, I'm Jonu Sharma 🖥️. I believe great ideas deserve beautiful, functional websites — and I’m here to build them." <br />
                I believe great ideas deserve beautiful, functional websites — and I’m here to build them."


            </motion.p>

            <motion.button
                whileHover={{ scale: 1.1 }}
                className=" rounded-lg p-4 md:relative md:top-24 wave-button">
                <a className="text-white font-bold" href="/resume.pdf" download >Download resume</a>
            </motion.button>

        </div>
    );
};

export default HeroSection;
