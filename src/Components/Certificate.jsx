import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
const certificates = [
   
    {
        id: 1,
        title: 'Web development with React js and Express js and mongodb/sql as databases',
        image: '/Image/Web_Internship.png',
        issuer: 'XpertStim IT Service Pvt. Ltd.',
    },
    {
        id: 2,
        title: 'Frontend development with react js and Javescript',
        image: '/Image/Frontend amazon.png',
        issuer: 'Devtown',
    },
    {
        id: 3,
        title: 'Frontend development with react js and Javescript',
        image: '/Image/Frontend microsoft.png',
        issuer: 'Devtown',
    },
    {
        id: 4,
        title: 'Frontend development with react js and Javescript',
        image: '/Image/frontend_devtown.png',
        issuer: 'Devtown',
    },
    {
        id: 5,
        title: 'Frontend development with react js and Javescript',
        image: '/Image/frontend google.png',
        issuer: 'Devtown',
    },

];

export default function CertificateSection() {
    const [selectedCert, setSelectedCert] = useState(null);
    return (
        <section className="bg-black text-white py-20 px-5">
            <h2 className="text-4xl font-bold text-center mb-12">📜 Certificates</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {certificates.map((cert, index) => (
                    <motion.div
                        key={cert.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        onClick={() => setSelectedCert(cert)}
                        className="bg-[#1a1a1a] cursor-pointer p-5 rounded-xl shadow-lg hover:scale-105 transition-transform"
                    >
                        <img src={cert.image} alt={cert.title} className="w-full h-48 object-cover rounded" />
                        <h3 className="text-xl font-semibold mt-4">{cert.title}</h3>
                        <p className="text-sm font-semibold text-gray-400"> Issued By : {cert.issuer}</p>
                    </motion.div>
                ))}

                <AnimatePresence>
                    {selectedCert && (
                        <motion.div
                            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedCert(null)}
                        >
                            <motion.div
                                className="bg-[#111] rounded-xl overflow-hidden max-w-3xl w-full shadow-lg relative"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <img
                                    src={selectedCert.image}
                                    alt={selectedCert.title}
                                    className="w-full max-h-[80vh] object-contain"
                                />
                                <div className="p-5 text-center">
                                    <h3 className="text-2xl font-semibold">{selectedCert.title}</h3>
                                    <p className="text-gray-400">Issued By : {selectedCert.issuer}</p>
                                    <button
                                        onClick={() => setSelectedCert(null)}
                                        className="mt-4 bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
                                    >
                                        Close
                                    </button>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
