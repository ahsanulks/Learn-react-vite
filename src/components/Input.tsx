import React, { InputHTMLAttributes } from 'react';

interface InputProps {
    type?: string;
    forwardRef?: React.Ref<HTMLInputElement> | null;
}

function Input(
    props: InputProps & InputHTMLAttributes<HTMLInputElement>,
): JSX.Element {
    const { type = 'text', forwardRef, ...inputProps } = props;
    return (
        <input
            ref={forwardRef}
            className={
                'transition duration-300 w-full focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-400 border-slate-300 shadow-sm rounded-lg'
            }
            type={type}
            {...inputProps}
        ></input>
    );
}

export default Input;
