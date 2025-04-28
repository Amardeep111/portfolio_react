import { motion } from "framer-motion";

const CV = () => {
    const handleDownload = () => {
        // Replace this URL with your actual CV download link
        const cvUrl = "https://drive.google.com/file/d/18EwI4b4EWqViSLJqadDUkcgIL_A-mPmp/view?usp=sharing"; // Example: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID"
        
        try {
            const link = document.createElement('a');
            link.href = cvUrl;
            link.download = 'Amardeep_Sarkar_CV.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Error downloading CV:', error);
            alert('Error downloading CV. Please try again later.');
        }
    };

    return (
        <section className="relative py-16 overflow-hidden">
            {/* <div className="absolute inset-0 bg-gradient-to-tr from-[#0A0A0A]/50 via-transparent to-[#1A1A1A]/50" /> */}
            <div className="relative z-10">
                <div className="m-0 p-0 sm:p-4 lg:p-0 mx-auto max-w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h2 className="text-3xl md:text-4xl white">
                            My <span className="text-3xl md:text-4xl text-neutral-500">CV</span>
                        </h2>
                        <div className="w-20 h-1 mx-auto mb-8 -mt-8"></div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-[#1A1A1A]/50 rounded-lg p-8 shadow-sm max-w-2xl mx-auto"
                        >
                            <div className="space-y-6">
                                <p className="text-gray-400 text-lg">
                                    Download my CV to learn more about my professional journey and skills.
                                </p>
                                
                                <motion.button
                                    onClick={handleDownload}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-block bg-gradient-to-r from-pink-500 via-slate900 to-purple-900 text-black text-3xl tracking-tight p-4 rounded-lg"
                                >
                                    Download CV
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CV; 