import React from 'react';

const Section = ({children, className})=>{
    return(
        <div className={`h-screen overflow-hidden ${className}`}>
            {children}
        </div>
    )
}
export default Section;