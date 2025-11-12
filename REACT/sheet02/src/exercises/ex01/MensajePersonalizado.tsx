type mensajePersonalizadoProps = {
	texto: string;
	color: string;
}

const MensajePersonalizado = ({ texto, color }: mensajePersonalizadoProps) => {

	return (
		<div className="mensaje-personalizado" style={{backgroundColor: color}}>
			{texto}
		</div>
	)
}

export default MensajePersonalizado;