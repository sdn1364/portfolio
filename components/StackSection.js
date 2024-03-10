'use client';

import React from 'react';
import Section from "./template/section";
import Center from "./template/center";
import {motion} from "framer-motion";
import Image from "next/image";
import MyPhoto from "../public/myphoto.jpg";
import DownArrow from "./template/DownArrow";
import HTML from "../public/HTML5_logo_and_wordmark.svg"
import CSS from "../public/CSS3_logo_and_wordmark.svg"
import JS from "../public/javascript-logo.svg"
import ReactLogo from '../public/React_Logo.svg'
import Redux from '../public/redux.svg'
import Php from '../public/PHP-logo.svg'
import Laravel from '../public/logomark.min.svg'
import Node from '../public/nodejs_logo.svg'
import NextJs from '../public/nextjs-white-logo.svg'


import FlyingLogo from "./template/FlyingLogo";

const StackSection = () =>{
    return(
        <Section className="relative">
            <Center>
                <motion.div className="space-y-5 w-2/3">
                    <h1 className="font-orbitron text-center text-3xl mb-5">These are the tech I mostly use in my projects.</h1>
                    <div className="flex flex-row justify-between relative h-12">
                        <FlyingLogo src={HTML}  alt="Html logo"/>
                        <FlyingLogo src={CSS} alt="Css logo"/>
                        <FlyingLogo src={JS}  alt="JS logo"/>
                        <FlyingLogo  src={ReactLogo} alt="React logo"/>
                        <FlyingLogo src={Redux}  alt="Redux logo"/>
                        <FlyingLogo src={NextJs}  alt="Next js logo"/>
                        <FlyingLogo src={Node}  alt="Node js logo"/>
                        <FlyingLogo src={Php}  alt="php logo"/>
                        <FlyingLogo src={Laravel}  alt="Laravel logo"/>
                    </div>
                </motion.div>
            </Center>
            <Center className="absolute bottom-7 right-8 flex items-center cursor-pointer">
                <DownArrow/>
                <p className="mx-2">Contact me</p>
            </Center>
        </Section>
    )
}
export default StackSection;
