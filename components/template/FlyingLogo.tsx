import React from 'react';
import {motion} from 'framer-motion';
import Image from "next/image";

interface Props {
    alt: string;
    src: string;
    className?:string;
}

const FlyingLogo = ({alt,src, className=""}:Props)=>{
    return (
        <div className={` ${className}`}>
            <Image height="80" width="80" src={src} alt={alt}/>
        </div>
    )
}
export default FlyingLogo;
