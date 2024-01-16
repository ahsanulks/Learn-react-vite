import { useState } from 'react';
import Button from './components/Button';
import PlaceContentCenter from './components/PlaceContentCenter';

function App() {
    const [count, setCounter] = useState(0);

    function handleClick() {
        setCounter((x) => x + 1);
    }

    return (
        <PlaceContentCenter>
            <h1 className={'text-5xl font-bold'}>{count}</h1>
            <div className={'mt-5 flex items-center gap-2'}>
                <Button onClick={handleClick} text={'+1'}></Button>
                <Button
                    onClick={() => {
                        handleClick();
                        handleClick();
                        handleClick();
                    }}
                    text={'+3'}
                ></Button>
            </div>
        </PlaceContentCenter>
    );
}

export default App;
