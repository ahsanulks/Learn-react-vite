import { JSX, useState } from 'react';
import Button from './Button';

interface CounterProps {
    initialValue: number;
}

function Counter({ initialValue }: CounterProps): JSX.Element {
    const [count, setCounter] = useState(initialValue);

    function handleClick() {
        setCounter((x: number) => x + 1);
    }

    return (
        <div>
            <h1 className={'text-5xl font-bold'}>{count}</h1>
            <div className={'mt-5 flex items-center gap-2'}>
                <Button onClick={handleClick} text={'+1'} />
                <Button
                    onClick={() => {
                        handleClick();
                        handleClick();
                        handleClick();
                    }}
                    text={'+3'}
                />
            </div>
        </div>
    );
}

export default Counter;
