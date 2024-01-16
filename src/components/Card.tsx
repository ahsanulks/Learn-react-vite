import React, { ReactNode } from 'react';

interface CardProps {
    children?: ReactNode;
}

interface CardComponent extends React.FC<CardProps> {
    Title: React.FC<{ children: ReactNode }>;
    Body: React.FC<{ children: ReactNode }>;
    Footer: React.FC<{ children: ReactNode }>;
}

const Card: CardComponent = ({ children }) => {
    return (
        <div
            className={'shadow rounded-lg overflow-hidden bg-white text-black'}
        >
            {children}
        </div>
    );
};

Card.Title = ({ children }) => {
    return (
        <div className={'p-4 border-b'}>
            <h1 className={'text-xl'}>{children}</h1>
        </div>
    );
};

Card.Body = ({ children }) => {
    return <div className={'leading-relaxed p-4'}>{children}</div>;
};

Card.Footer = ({ children }) => {
    return <div className={'bg-slate-50 p-4'}>{children}</div>;
};

export default Card;
