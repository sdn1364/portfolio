import React from 'react';
import {motion} from "framer-motion";
import verticalShapes from "./verticalShapes";

const pathVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0
    },
    visible: {
        opacity: 1,
        pathLength: 1,
    }
}
const MainVertical = ({className = ""}) => {
    return (
        <svg className={className} viewBox="0 0 339 396" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="verticalGradient"
                                gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0%" style={{stopColor: '#ef4444', stopOpacity: 1}}/>
                    <stop offset="6.25%" style={{stopColor: '#f97316', stopOpacity: 1}}/>
                    <stop offset="12.5%" style={{stopColor: '#f59e0b', stopOpacity: 1}}/>
                    <stop offset="18.75%" style={{stopColor: '#eab308', stopOpacity: 1}}/>
                    <stop offset="25%" style={{stopColor: '#84cc16', stopOpacity: 1}}/>
                    <stop offset="31.25%" style={{stopColor: '#22c55e', stopOpacity: 1}}/>
                    <stop offset="37.5%" style={{stopColor: '#10b981', stopOpacity: 1}}/>
                    <stop offset="43.75%" style={{stopColor: '#14b8a6', stopOpacity: 1}}/>
                    <stop offset="50%" style={{stopColor: '#06b6d4', stopOpacity: 1}}/>
                    <stop offset="56.25%" style={{stopColor: '#0ea5e9', stopOpacity: 1}}/>
                    <stop offset="62.5%" style={{stopColor: '#3b82f6', stopOpacity: 1}}/>
                    <stop offset="68.75%" style={{stopColor: '#6366f1', stopOpacity: 1}}/>
                    <stop offset="75%" style={{stopColor: '#8b5cf6', stopOpacity: 1}}/>
                    <stop offset="81.25%" style={{stopColor: '#a855f7', stopOpacity: 1}}/>
                    <stop offset="87.5%" style={{stopColor: '#d946ef', stopOpacity: 1}}/>
                    <stop offset="93.75%" style={{stopColor: '#ec4899', stopOpacity: 1}}/>
                    <stop offset="100%" style={{stopColor: '#f43f5e', stopOpacity: 1}}/>

                </radialGradient>
            </defs>
            <motion.g
                transition={{
                    staggerChildren: 0.5
                }} stroke="url(#verticalGradient)">

                {
                    Object.keys(verticalShapes).map((item) => {
                        let delayFactor = 0.05;
                        return <motion.path key={item}
                                            variants={pathVariants}
                                            initial="hidden"
                                            animate="visible"
                                            transition={{
                                                duration: 2,
                                                ease: 'easeInOut',
                                                delay: delayFactor * item
                                            }}
                                            d={verticalShapes[item]['path']}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"/>
                    })
                }
            </motion.g>
        </svg>
    )
}
export default MainVertical;

