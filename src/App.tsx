import PlaceContentCenter from './components/PlaceContentCenter';
import Card from './components/Card';
import Button from './components/Button';
import { IconBrandGithub } from '@tabler/icons-react';
import Input from './components/Input';
import Label from './components/Label';
import React, { useState } from 'react';

interface FormState {
    name: string;
    email: string;
}

function App() {
    const [form, setForm] = useState<FormState>({
        name: '',
        email: '',
    });

    function onChange(event: React.ChangeEvent<HTMLInputElement>): void {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    function submit(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        console.log(form);
    }

    return (
        <PlaceContentCenter>
            <Card>
                <Card.Title>Signup for new account!</Card.Title>
                <form onSubmit={submit}>
                    <Card.Body>
                        <div className={'mb-6'}>
                            <Label htmlFor={'name'} value={'Name'} />
                            <Input
                                value={form.name}
                                onChange={onChange}
                                id={'name'}
                                name={'name'}
                            />
                        </div>
                        <div className={'mb-6'}>
                            <Label htmlFor={'email'} value={'Email'} />
                            <Input
                                value={form.email}
                                onChange={onChange}
                                id={'email'}
                                name={'email'}
                            />
                        </div>
                    </Card.Body>
                    <Card.Footer>
                        <Button text={'Register'} className={'bg-black'}>
                            <IconBrandGithub />
                        </Button>
                    </Card.Footer>
                </form>
            </Card>
        </PlaceContentCenter>
    );
}

export default App;
