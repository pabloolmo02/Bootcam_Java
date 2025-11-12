type iconoNotificacionProps = {
	mensaje: string;
}

const IconoNotificacion = ({mensaje}: iconoNotificacionProps) => {
	return (
		<div className="estilo-icono">
			<span>🔔</span>
			<span>{mensaje}</span>
		</div>
	)
}

export default IconoNotificacion