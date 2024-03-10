'use client';
import React, {ReactNode} from 'react';
import SocialLink from "./SocialLink";
import Instagram from './art/Instagram';
import Dribbble from "./art/Dribbble";
import Github from "./art/Github";

interface Links  {
    title: string;
    to:string,
    icon: ReactNode
}

const links:Links[] = [
     {
        title : 'Instagram',
        to: 'https://www.instagram.com/soheyl.delshad/',
        icon: <Instagram/>
    },
    {
        title: 'Dribbble',
        to: 'https://dribbble.com/sdn1364',
        icon: <Dribbble/>
    },
    {
        title: 'Github',
        to: 'https://github.com/sdn1364',
        icon: <Github/>
    }
]

const Social = () => {
    return (
        <div className="fixed flex flex-col bottom-5 left-5 space-y-2 z-50 xl:visible">
            {links.map((item, index) => {
                let CustomTag = `${item.title}`
                return <SocialLink key={index} delay={0.05 * index}
                                    to={item.to}
                                    title={item.title}
                >
                    {item.icon}
                </SocialLink>
            })
            }
        </div>
    )
}
export default Social;
