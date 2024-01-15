import { IconUserCircle } from '@tabler/icons-react';
import Button from './components/Button';
import Card from './components/Card';

function App() {
    return (
        <div className={'bg-slate-900 grid place-content-center min-h-screen'}>
            <div className={'max-w-md w-full'}>
                <Card>
                    <Card.Title>Hello React</Card.Title>
                    <Card.Body>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Repellendus porro corporis necessitatibus eligendi
                        cupiditate facere rerum qui. Quaerat explicabo minima
                        quod neque error at accusamus, cum unde quam dicta
                        reprehenderit!
                    </Card.Body>
                    <Card.Footer>
                        <Button text='register'>
                            <IconUserCircle />
                        </Button>
                    </Card.Footer>
                </Card>
            </div>
        </div>
    );
}

export default App;
