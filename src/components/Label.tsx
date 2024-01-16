import { LabelHTMLAttributes, ReactNode, JSX } from 'react';

interface LabelProps {
    children?: ReactNode;
    value?: string;
}

function Label(
    props: LabelProps & LabelHTMLAttributes<HTMLLabelElement>,
): JSX.Element {
    const { value, children, ...labelProps } = props;

    return (
        <label className={'text-slate-600 mb-1 block'} {...labelProps}>
            {value || children}
        </label>
    );
}

export default Label;
