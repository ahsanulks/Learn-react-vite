import { ReactNode, useEffect, useRef } from 'react';
import Card from './Card';

function RefHooks({ isFocused = false }: { isFocused?: boolean }): ReactNode {
    const inputRef = useRef<HTMLInputElement | null>(null);

    // will be called always if rerender
    useEffect(() => {
        if (isFocused && inputRef.current) {
            inputRef.current.focus();
        }
    });

    // will be called on first render
    // useEffect(() => {
    //     if (isFocused && inputRef.current) {
    //         inputRef.current.focus();
    //     }
    // }, []);

    // will be called when isFocused get rerender
    // useEffect(() => {
    //     if (isFocused && inputRef.current) {
    //         inputRef.current.focus();
    //     }
    // }, [isFocused]);

    return (
        <Card>
            <Card.Title>useRef Hooks</Card.Title>
            <Card.Body>
                <input
                    ref={inputRef}
                    className={
                        'transition duration-300 w-full focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-200'
                    }
                    type={'text'}
                />
            </Card.Body>
            <Card.Footer>//</Card.Footer>
        </Card>
    );
}

export default RefHooks;
