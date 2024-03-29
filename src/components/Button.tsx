import clsx from 'clsx';
import { ButtonHTMLAttributes, JSX } from 'react';

function Button(
    props: {
        children?: JSX.Element;
        text: string;
        className?: string;
    } & ButtonHTMLAttributes<HTMLButtonElement>,
) {
    const { className = 'bg-blue-600', children, text, ...buttonProps } = props;
    return (
        <button
            {...buttonProps}
            className={clsx(
                className,
                '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 font-medium whitespace-nowrap inline justify-center item-center gap-x-2 text-white px-4 h-10 rounded',
            )}
        >
            {children ? (
                <>
                    {children}
                    {text}
                </>
            ) : (
                text
            )}
        </button>
    );
}

export default Button;
