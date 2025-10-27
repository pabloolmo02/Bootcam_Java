type tarjetaProps = {
	children: React.ReactNode;
}

const Tarjeta = ({children}: tarjetaProps) => {
	return (
		<div className="tarjeta">{children}</div>
	)
}

export default Tarjeta;