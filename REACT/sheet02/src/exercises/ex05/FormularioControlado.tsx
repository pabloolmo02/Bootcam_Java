import { useState, type FormEvent } from "react";

function FormularioControlado() {
	const [inputValue, setInputValue] = useState(''); // 1. Declara una variable de estado para el valor del input
	const [submitMessage, setSubmitMessage] = useState(''); // 2. Declara una variable de estado para el mensaje a mostrar después de enviar

	// 3. Manejador para el cambio en el input
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	// 4. Mnejador para enviar el formulario
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {

		event.preventDefault(); // eVITA RECARGAR LA PAGINA
		setSubmitMessage(inputValue); // Guarda el msg
		setInputValue(''); // Limpia el input

		console.log('Tipo de evento:', event.type);              // "submit"
		console.log('Elemento que disparó .target:', event.target);      // <form>...</form>
		console.log('Evento completo:', event);                  // Objeto SyntheticEvent
	};

	return (
		<div className="formulario-container">
			<h3>Formulario Controlado</h3>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={inputValue}
					onChange={handleChange}
					placeholder="ESSSCRIBE"
					className="input-formulario"
				/>
				<button type="submit" className="button-formulario">

				</button>

				{submitMessage && (
					<div className="mensaje-resultado">
						<p><strong>Mensaje enviado:</strong></p>
						<p className="mensaje-texto">"{submitMessage}"</p>
					</div>
				)}

				<div className="estado-actual">
					<small>
						Estado actual: <code>{inputValue || "(vacío)"}</code>
					</small>
				</div>
			</form>
		</div>
	)
}

export default FormularioControlado;