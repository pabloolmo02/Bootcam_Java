type cabeceraProps = {
	children: React.ReactNode;
}

const Cabecera = ({children}: cabeceraProps) => {
	return (
		<h3 className="cabecera">{children}</h3>
	)
}

export default Cabecera