import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ""
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        // Validate fields
        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!validateEmail(formData.email)) {
            newErrors.email = "Please enter a valid email";
        }
        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // If validation passes, you can handle the form submission here
        console.log("Form submitted:", formData);
        // Reset form after submission
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="border-b border-neutral-900 pb-20">
            <div className="flex flex-wrap">
                {/* Left side - Contact Form */}
                <div className="w-full lg:w-1/2 p-8">
                    <motion.h2 
                    whileInView={{opacity: 1, y: 0}}
                    initial={{opacity: 0, y: -100}}
                    transition={{duration: 0.5}}
                    className="text-2xl mb-8 font-thin tracking-tight text-neutral-400">GET IN TOUCH</motion.h2>
                    <motion.h1 
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: -100}}
                    transition={{duration: 0.7}}
                    className="text-6xl font-thin tracking-tight mb-16">Contact.</motion.h1>
                    
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <motion.div 
                        whileInView={{opacity: 1, x: 0}}
                        initial={{opacity: 0, x: -100}}
                        transition={{duration: 1}}
                        className="space-y-2">
                            <label className="block text-lg font-thin tracking-tight text-neutral-400">Your Name</label>
                            <input 
                                type="text" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="What's your good name?"
                                className={`w-full p-4 bg-[#1a1a2e] rounded-lg border ${errors.name ? 'border-red-500' : 'border-neutral-800'} focus:border-purple-500 focus:outline-none transition-colors text-base font-thin tracking-tight`}
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1 font-thin">{errors.name}</p>}
                        </motion.div>
                        
                        <motion.div 
                        whileInView={{opacity: 1, x: 0}}
                        initial={{opacity: 0, x: -100}}
                        transition={{duration: 1}}
                        className="space-y-2">
                            <label className="block text-lg font-thin tracking-tight text-neutral-400">Your email</label>
                            <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="What's your web address?"
                                className={`w-full p-4 bg-[#1a1a2e] rounded-lg border ${errors.email ? 'border-red-500' : 'border-neutral-800'} focus:border-purple-500 focus:outline-none transition-colors text-base font-thin tracking-tight`}
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1 font-thin">{errors.email}</p>}
                        </motion.div>
                        
                        <motion.div 
                        whileInView={{opacity: 1, x: 0}}
                        initial={{opacity: 0, x: -100}}
                        transition={{duration: 1}}
                        className="space-y-2">
                            <label className="block text-lg font-thin tracking-tight text-neutral-400">Your Message</label>
                            <textarea 
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="What you want to say?"
                                rows="6"
                                className={`w-full p-4 bg-[#1a1a2e] rounded-lg border ${errors.message ? 'border-red-500' : 'border-neutral-800'} focus:border-purple-500 focus:outline-none transition-colors resize-none text-base font-thin tracking-tight`}
                            ></textarea>
                            {errors.message && <p className="text-red-500 text-sm mt-1 font-thin">{errors.message}</p>}
                        </motion.div>

                        <motion.button
                        whileInView={{opacity: 1, x: 0}}
                        initial={{opacity: 0, x: -100}}
                        transition={{duration: 1}}
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-4 px-8 rounded-lg text-lg font-thin tracking-tight hover:opacity-90 transition-opacity mt-8"
                        >
                            Send Message
                        </motion.button>
                    </form>
                </div>

                {/* Right side - 3D Animation */}
                <motion.div 
                    className="w-full lg:w-1/2 p-8 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="relative w-96 h-96">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-30 animate-spin-slow"></div>
                        <div className="relative w-full h-full bg-[#1a1a2e] rounded-full border border-neutral-800 shadow-2xl"></div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;