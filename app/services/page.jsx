"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
    {
        num: "01",
        title: "Full Stack Development",
        descreption: "As an accomplished Full Stack Developer, I bring extensive expertise in both front-end and back-end development, crafting seamless and high-performing web applications. My proficiency encompasses a diverse array of technologies and frameworks, enabling me to deliver comprehensive solutions that meet complex business needs.",
        href: "",
    },
    {
        num: "02",
        title: "App Development",
        descreption: "Embark on a journey of innovation and excellence with my prowess in mobile app development. With a passion for crafting seamless digital experiences, I specialize in bringing ideas to life through captivating and intuitive mobile applications.",
        href: "",
    },
    {
        num: "03",
        title: "AI/ML",
        descreption: "Step into the realm of tomorrow with my expertise in Artificial Intelligence (AI) and Machine Learning (ML), where algorithms breathe life into data and transform the ordinary into the extraordinary. With a passion for innovation and a relentless pursuit of excellence, I specialize in harnessing the potential of AI and ML to drive tangible value and shape the future of technology.",
        href: "",
    },
    {
        num: "04",
        title: "Data Science",
        descreption: "Embarking on a journey of discovery, I dive deep into the depths of data, unraveling its mysteries and uncovering valuable insights. Armed with a keen eye for detail and a mastery of exploratory data analysis techniques, I transform raw data into a rich tapestry of knowledge, paving the way for deeper understanding and informed decision-making.",
        href: "",
    },
];

import { motion } from "framer-motion";
const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
                    {services.map((service, index) => {
                        return (
                            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                                {/* Top */}
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                                    <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                                        <BsArrowDownRight className="text-primary text-3xl " />
                                    </Link>
                                </div>
                                {/* title */}
                                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duaration-500">{service.title}</h2>
                                {/* descreption */}
                                <p className="text-white/60 ">{service.descreption}</p>
                                {/* border */}
                                <div className="border-b border-white/20 w-full"></div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
