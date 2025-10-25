type panelLoginProps = {
    logueado: boolean;
}

const PanelLogin = ({logueado}: panelLoginProps) => {
    return (
        <div>
            <h1>EX04</h1>
            {logueado ? (<h2>Bienvenido al panel de usuario ex04</h2>) :
                (<h2>Por favor, inicia sesión</h2>)}
        </div>
    )
}

export default PanelLogin