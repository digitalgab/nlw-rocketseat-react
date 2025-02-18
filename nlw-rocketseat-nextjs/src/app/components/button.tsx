import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<'button'> {}

export function Button(props : ButtonProps) {
  return (
    <button
      flex
      justify-center
      w-full h-12 
      px-5 
      bg-gray-500 text-blue 
      font-semibold 
      rounded-xl 
      cursor-pointer 
      transition-colors duration-200 
      hover:bg-blue hover:text-gray-500
      "
      {...props}
    >
      {props.children}
    </button>
  );
}

