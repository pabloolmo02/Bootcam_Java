type Usuario = {
    id: number;
    nombre: string;
    activo: boolean;
}

type ListaUsuarioProp = {
    usuarios: Usuario[];
}

const ListaUsuarios = ({usuarios}: ListaUsuarioProp) => {
    const usuariosActivos = usuarios.filter(u => u.activo);
    return (
       <div>
            <h1>EX06</h1>
            <h1>Lista de Usuarios Activos</h1>

                {usuariosActivos.length > 0 ? (
                    <ul>
                        {usuariosActivos.map(u => (
                            <li key={u.id}>{u.nombre}</li>
                        ))}
            </ul> ): ( 
                <p>No hay usuarios activos en este momento :/</p>
        )}
       </div>
    )
}

export default ListaUsuarios