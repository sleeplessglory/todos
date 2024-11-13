import {useEffect} from 'react';
import Form from './Form';
import List from './List';
export default function App() {
    useEffect(() => {
        window.onbeforeunload = () => true;
        return () => {
          window.onbeforeunload = null;
        };
    }, []); 
    return(
        <>
            <p>todos</p>
            <main>
                <Form />
                <List />
            </main>
        </>
    );
};