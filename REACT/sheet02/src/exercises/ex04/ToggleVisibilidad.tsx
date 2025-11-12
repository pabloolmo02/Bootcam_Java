import { useState } from "react";

function ToggleVisibilidad() {
	const [visible, setVisible] = useState(false);

	const toggleVisibilidad = () => {
		setVisible(!visible);
	};

	return (
		<div className="toggle-container">
			<button onClick={toggleVisibilidad} className="toggle-button">
				{visible ? "Ocultar" : "Mostrar"} Contenido
			</button>
		
		{visible && (
			<div className="contenido-toggle">
				<p>¡Este contenido ahora es visible!</p>
			</div>
		)}
		</div>
	)
}

export default ToggleVisibilidad