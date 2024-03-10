'use client';

import React, {useEffect, useState} from 'react';
import Section from "./template/section";
import Center from "./template/center";
import MainArt from "./art/mainArt";
import MainVerticalArt from "./art/MainVertical";
import {motion} from "framer-motion";
import DownArrow from "./template/DownArrow";
import {Orbitron} from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"] });

const MainSection = () => {
    const [width, setWindowWidth] = useState(0)

    useEffect(
        () => {

            updateDimensions();
            window.addEventListener('resize', updateDimensions);

            return () => {
                window.removeEventListener('resize', updateDimensions);
            }
        },
        []
    )
    const updateDimensions = () => {
        const width = window.innerWidth
        setWindowWidth(width)
    }


    return (
        <Section className="relative overflow-hidden">
            <Center>
                {
                    width > 1024 ? <div className="w-full xl:visible stroke-2 p-36 ">

                            <MainArt/>
                        </div> :
                        <div className="w-full xl:hidden stroke-[1px] p-3">
                            <MainVerticalArt/>
                        </div>
                }

                <div className="absolute -mt-9 xl:mt-0 flex-col w-fit text-gray-900 dark:text-white">
                    <motion.h3 initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, stiffness: 5, delay: 0.5}} className="font-bold text-md xl:text-3xl w-full text-neutral-500">
                        I am
                    </motion.h3>
                    <motion.h1 className={`${orbitron.className} text-6xl md:text-8xl tracking-[0.47rem] md:tracking-[1rem]  text-center xl:text-justify`}
                               initial={{opacity: 0, y: -10}}
                               animate={{opacity: 1, y: 0}}
                               transition={{duration: 1, stiffness: 5}}
                    >
                        SOHEYL
                    </motion.h1>
                    <motion.h2 className={`${orbitron.className} text-6xl md:text-8xl  text-center xl:text-justify`}
                               initial={{opacity: 0, y: 10}}
                               animate={{opacity: 1, y: 0}}
                               transition={{duration: 1, stiffness: 5, delay: 0.005}}
                    >
                        DELSHAD
                    </motion.h2>
                    <motion.h3 initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, stiffness: 5, delay: 1}} className="font-bold text-md xl:text-3xl justify-self-end w-full text-right  text-neutral-500">
                        a Web Developer
                    </motion.h3>
                </div>

            </Center>
            <motion.div initial={{
                x: 500,
                opacity: 0
            }}
                        animate={{
                            x: 0,
                            opacity: 1
                        }}
                        transition={{
                            duration: 1,
                            stiffness: 5
                        }}
                        className="absolute bottom-7 right-8 flex items-center cursor-pointer">
                <DownArrow/>
                <p className="mx-2">Know more about me</p>
            </motion.div>
        </Section>
    )
}

export default MainSection;
