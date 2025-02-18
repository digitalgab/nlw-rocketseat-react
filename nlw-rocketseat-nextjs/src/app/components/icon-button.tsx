import { ComponentProps } from "react";

interface IconButtonProps extends ComponentProps<"button"> {}

export function IconButton(props : IconButtonProps) {
  return (
    <button className="p-4 flex items-center justify-center" {...props}>
      {props.children}
    </button>
  );
}

