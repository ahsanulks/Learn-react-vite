import { ReactNode, useRef, useState } from 'react';
import Card from './Card';
import Input from './Input';
import useJoke from '../hooks/useJoke';
import Button from './Button';

function Joke(): ReactNode {
    const [name, setName] = useState<string>('');
    const joke = useJoke(name);
    const inputNameRef = useRef<HTMLInputElement | null>(null);

    function generateJoke() {
        setName(inputNameRef.current.value);
    }

    return (
        <Card>
            <Card.Title>Get Jokes</Card.Title>
            <Card.Body>
                <Input forwardRef={inputNameRef} type={'text'} />
                <p className={'md-4'}>{joke}</p>
            </Card.Body>
            <Card.Footer>
                <Button text='Generate Joke' onClick={generateJoke} />
            </Card.Footer>
        </Card>
    );
}

export default Joke;
