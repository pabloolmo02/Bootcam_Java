import { useEffect } from "react";

type GreetingProps = {
    name: string;
}

function Greeting({ name }: GreetingProps) {
    // useEffect se ejecuta cada vez que 'name' cambia
    useEffect(() => {
        if (name) {
            console.log(`Actualizando saludo para: ${name}`);
        }
    }, [name]);

    return (
        <div className="greeting-container">
            {name && (
                <div className="greeting-message">
                    <p>👋 ¡Hola, <strong>{name}</strong>!</p>
                </div>
            )}
        </div>
    );
}

export default Greeting;