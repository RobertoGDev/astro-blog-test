import {useState} from 'preact/hooks'

export default function Greetings({ messages }) {
    
    const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))]

    const [greeting, setGreeting] = useState(randomMessage());

    return (
        <div>
            <h3>
                {greeting} ¡Gracias por tu visita Rrrrrrrr Rrrrrrrr! 😽 <button className={'saludo'} onClick={() => setGreeting(randomMessage())}>Nuevo Saludo</button>
            </h3>
        </div>
    );

}