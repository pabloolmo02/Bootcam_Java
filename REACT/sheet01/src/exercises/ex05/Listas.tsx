type Usuario = {
    id: number;
    nombre: string;
}

type ListasProp = {
    usuarios: Usuario[];
}

const Listas = ({usuarios}: ListasProp) => {
    return (
        <div>
            <h1>EX05</h1>
            <h1>Lista de Usuarios</h1>
            <ul>
                {usuarios.map(u => (
                    <li key={u.id}>{u.nombre}</li>
                ))}
            </ul>
        </div>
    )
}

export default Listas;