import IconoNotificacion from "./IconoNotificacion";

type panelProps = {
	mensaje: string;
}

const Panel = ({mensaje}: panelProps) => {
	return (
		<div className="panel-notificaciones">
			<h3 className="panel-notificaciones">Panel de Notificaciones</h3>
			<IconoNotificacion mensaje={mensaje} />
		</div>
	)
}

export default Panel