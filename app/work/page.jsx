"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
        num: "01",
        category: "frontend",
        title: "project 1",
        description: "Crafting Frontend Experiences with HTML5, CSS3, and JavaScript.",
        stack: [
            {
                name: "Html 5",
            },
            { name: "Css 3" },
            { name: "Javascript" },
        ],
        image: "/assets/work/thumb1.png",
        live: "",
        github: "",
    },
    {
        num: "02",
        category: "fullstack",
        title: "project 2",
        description: "NextTail is an innovative portfolio project that embodies the seamless integration of frontend and backend technologies, powered by Next.js and Tailwind CSS. As a full-stack showcase, this project leverages the dynamic capabilities of Next.js for server-side rendering and routing, while harnessing the expressive styling features of Tailwind CSS for a visually stunning frontend experience.",
        stack: [
            {
                name: "Next.js",
            },
            { name: "Tailwind.css" },
            { name: "Node.js" },
        ],
        image: "/assets/work/thumb2.png",
        live: "",
        github: "",
    },
    {
        num: "03",
        category: "App Development",
        title: "project 3",
        description: "FlutterNode RealEstate is a modern real estate app powered by Flutter for the frontend and Node.js for the backend. Seamlessly combining the versatility of Flutter's UI toolkit with the scalability of Node.js server-side technology, FlutterNode RealEstate redefines the real estate experience for buyers, sellers, and agents alike.",
        stack: [
            {
                name: "Flutter",
            },
            { name: "Node.js" },
        ],
        image: "/assets/work/thumb3.png",
        live: "",
        github: "",
    },
];
const Work = () => {
    const [project, setProject] = useState(projects[0]);
    const handleSlideChange = (swiper) => {
        // get current slide index
        const currentIndex = swiper.activeIndex;

        // update project state based on current slide index
        setProject(projects[currentIndex]);
    };
    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 ">
            <div className="container mx-auto ">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* outline num */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
                            {/* project category */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
                            {/* project descreption */}
                            <p className="text-white/60">{project.description}</p>
                            {/* stack */}
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li key={index} className="text-xl text-accent">
                                            {item.name}
                                            {/* remove the last comma */}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    );
                                })}
                            </ul>
                            {/* border */}
                            <div className="border border-white/20"></div>
                            {/* buttons */}
                            <div className="flex items-center gap-4">
                                {/* live project buttons */}
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent " />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live Project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>

                                {/* github project button */}
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent " />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github Repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                            {/* overlay */}
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                                            {/* image */}
                                            <div className="relative w-full h-full">
                                                <Image src={project.image} fill className="object-cover" alt="" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                            {/* slider button */}
                            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-[calc(50%_-_22px)] z-20 w-full justify-between xl:w-full xl:justify-between" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all sm:w-[38px] sm:h-[38px] md:w-[32px] md:h-[32px] lg:w-[28px] lg:h-[28px] xl:w-[24px] xl:h-[24px]" />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Work;
