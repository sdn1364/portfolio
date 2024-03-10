'use client';

import React, {useRef, useEffect} from 'react';
import Section from "./template/Section";
import Center from "./template/Center";
import {useInView} from "framer-motion"
import Image from "next/image";
import MyPhoto from "../public/myphoto.jpg";
import {motion} from 'framer-motion';
import DownArrow from "./template/DownArrow";

const AboutSection = () => {
    const ref = useRef(null)
    const isInView = useInView(ref,{once: true})

    useEffect(() => {
        console.log("Element is in view: ", isInView)

    }, [isInView])

    return (
        <Section className="relative">
            <Center className="flex-col xl:flex-row">
                <div className="xl:w-1/2 flex flex-row justify-center xl:justify-end p-10 " ref={ref}>

                    <motion.div className="flex items-center justify-end w-2/3 h-1/5 overflow-hidden"
                                style={{
                                    transform: isInView ? "none" : "translateX(-200px)",
                                    opacity: isInView ? 1 : 0,
                                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                                }}
                    >
                        <Image className="w-full h-auto" src={MyPhoto} alt='my photo'/>

                    </motion.div>
                </div>
                <motion.div
                    style={{
                        transform: isInView ? "none" : "translateX(200px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
                    className="xl:w-1/2 space-y-5 p-10">
                    <h1 className="font-orbitron text-3xl">Who am I?</h1>
                    <p className="xl:w-1/2 text-justify">I am a self taught web developer with a strong background in graphic design. I love working hard and long hour to get the result I desire. I am a fast learner and always eager to learn new thing as I learnt all of my skills all by myself. I am so passionate about my client&apos;s projects as if they are my own and try to do the best work I would ever can.</p>
                </motion.div>
            </Center>
            <Center className="absolute bottom-7 right-8 flex items-center cursor-pointer">
                <DownArrow/>
                <p className="mx-2">Check out what I can do</p>
            </Center>
        </Section>

    )
}

export default AboutSection;
