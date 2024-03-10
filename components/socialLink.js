import React from 'react';
import {motion} from 'framer-motion';

const SocialLink = ({children, to, title, className = '', delay = 0}) => {
    return (
        <motion.a
            initial={{
                x: -200
            }}
            animate={{
                x: 0
            }}
            transition={{
                delay: delay,
                duration: 1
            }}
            href={to} target="_blank"
            className={`flex flex-row space-x-2 items-center group  ${className}`}>
            <div className="w-5 text-white text-sm">
                {children}
            </div>
            <div className="overflow-hidden w-50">
                <p className="text-xs -translate-x-24 group-hover:translate-x-0 transition-all">{title}</p>
            </div>
        </motion.a>
    )
}
export default SocialLink;