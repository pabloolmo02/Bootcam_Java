type SaludoProps = {
    nombre: string;
}
const Saludo = ({nombre}: SaludoProps) => {
    return <h1>Hola, {nombre}</h1>
}

export default Saludo;