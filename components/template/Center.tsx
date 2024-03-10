import React, {ReactNode} from "react";


interface Props {
  children: ReactNode;
  className?: string;

}
const center = ({ className = "w-full h-full", children }:Props) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      {children}
    </div>
  );
};

export default center;
