import { useState } from "react";
import type { Level } from "../../App";
import Greeting from "./Greeting";

type Ex02Props = {
    nivel: Level;
}

function Ex02({ nivel }: Ex02Props) {
    const [name, setName] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    return (
        <div className="ex02-container">
            <h2>Ex02 - Saludo Dinámico ({nivel})</h2>
            
            {nivel === "basic" && (
                <div className="basic-section">
                    <h3>🟢 Modo Básico</h3>
                    <div className="input-group">
                        <label htmlFor="name-input">
                            Escribe tu nombre:
                        </label>
                        <input
                            id="name-input"
                            type="text"
                            value={name}
                            onChange={handleChange}
                            placeholder="Ej: Juan"
                            className="name-input"
                        />
                    </div>
                    <Greeting name={name} />
                </div>
            )}

            {nivel === "advanced" && (
                <div className="advanced-section">
                    <h3>🔴 Modo Avanzado</h3>
                    <p>Funcionalidades avanzadas aquí...</p>
                </div>
            )}
        </div>
    );
}

export default Ex02;