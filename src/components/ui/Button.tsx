import { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, className, ...buttonProps }: ButtonProps) => {
  return (
    <button
      className={
        className + " " + "bg-[#6200EE] text-white text-sm p-1 w-3/4 rounded-md"
      }
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
