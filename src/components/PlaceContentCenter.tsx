import { ReactNode } from 'react';

interface PlaceContentCenterProps {
    children: ReactNode;
}

function PlaceContentCenter({ children }: PlaceContentCenterProps) {
    return (
        <div className={'bg-black'}>
            <div
                className={
                    'bg-slate-900 text-violet-50 flex min-h-screen place-content-center items-center antialiased tracking-tight'
                }
            >
                <div className={'max-w-md w-full'}>{children}</div>
            </div>
        </div>
    );
}

export default PlaceContentCenter;
