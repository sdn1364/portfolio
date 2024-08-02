import { PropsWithChildren } from "react";

const IconWrapper = ({
  children,
  className,
}: PropsWithChildren<{ className: string }>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
};
export default IconWrapper;
