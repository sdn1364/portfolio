import React, {ReactNode} from 'react';

interface Props {
    children: ReactNode;
    className?:string
}
const Section = ({children, className = ''}:Props)=>{
    return(
        <div className={`h-screen overflow-hidden ${className}`}>
            {children}
        </div>
    )
}
export default Section;
