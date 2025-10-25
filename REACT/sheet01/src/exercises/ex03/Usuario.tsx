

type usuarioProps = {
    nombre: string;
    edad?: number;
}

const Usuario = ({nombre, edad}: usuarioProps) => {
    return (
        <div>
            <h1>EX03</h1>
            <h2>Nombre: {nombre}</h2>
            <h2>Edad: {edad !== undefined ? edad : "Edad no disponible"}</h2>
        </div>
    )
}

export default Usuario;