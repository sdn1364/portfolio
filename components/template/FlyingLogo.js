import React from 'react';
import {motion} from 'framer-motion';
import Image from "next/image";

const FlyingLogo = ({children,alt,src, className=""})=>{
    return (
        <div className={` ${className}`}>
            <Image height="80" width="80" src={src} alt={alt}/>
        </div>
    )
}
export default FlyingLogo;