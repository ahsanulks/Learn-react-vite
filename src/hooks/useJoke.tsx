import axios from 'axios';
import { useEffect, useState } from 'react';

function useJoke(name: string) {
    const [joke, setJoke] = useState<string>('');

    useEffect(() => {
        axios
            .get(`https://api.chucknorris.io/jokes/random?name=${name}`)
            .then((response) => setJoke(response.data.value))
            .catch((error) => {
                console.error('error', error);
            });
    }, [name]);

    return joke;
}

export default useJoke;
