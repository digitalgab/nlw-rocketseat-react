// Create a componente input with Interface 
import { ComponentProps } from "react";
import { Mail } from 'lucide-react';

interface InputProps extends ComponentProps<"input"> {
    error: boolean
}

export function Input({error = false, ...props}: InputProps) {
    return (
        <div className="flex flex-col gap-3">
            <span className="text-gray-400">
                <Mail />
            </span>
            <input
                className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-gray-500"
                {...props}
            />
        </div>
    );
}