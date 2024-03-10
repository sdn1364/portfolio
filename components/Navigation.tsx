import React from 'react';

const Navigation = ()=>{
    return (
        <div className="fixed right-5 h-screen w-5 flex flex-col items-center justify-center space-y-4 z-50">
            <div className="w-5 h-5 rounded-full absolute border border-white hover:w-6 hover:h-6 transition-all shrink-0 "></div>
            <div className="bg-white w-1.5 h-1.5 rounded-full"></div>
            <div className="bg-white w-1.5 h-1.5 rounded-full"></div>
            <div className="bg-white w-1.5 h-1.5 rounded-full"></div>
            <div className="bg-white w-1.5 h-1.5 rounded-full"></div>
        </div>
    )
}
export default Navigation;