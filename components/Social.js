'use client';
import React from 'react';
import SocialLink from "./socialLink";
import Instagram from './art/instagram';
import Youtube from './art/youtube';
import Dribbble from "./art/dribbble";
import Behance from "./art/behance";
import Github from "./art/githaub";


const links = {
    instagram : {
        title : 'Instagram',
        to: 'https://www.instagram.com/soheyl.delshad/',
        icon: <Instagram/>
    },
    dribbble:{
        title: 'Dribbble',
        to: 'https://dribbble.com/sdn1364',
        icon: <Dribbble/>
    },
/*    behance:{
        title: 'Behance',
        to: '',
        icon: <Behance/>
    },*/
    github:{
        title: 'Github',
        to: 'https://github.com/sdn1364',
        icon: <Github/>
    }
}

const Social = () => {
    return (
        <div className="fixed flex flex-col bottom-5 left-5 space-y-2 z-50 xl:visible hidden">
            {Object.keys(links).map((item, index) => {
                let CustomTag = `${links[item]['title']}`
                return < SocialLink key={item} delay={0.05 * index}
                                    to={links[item]['to']}
                                    title={links[item]['title']}>
                    {links[item]['icon']}
                < /SocialLink>
            })
            }
        </div>

    )
}
export default Social;
