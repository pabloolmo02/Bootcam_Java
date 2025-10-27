import './App.css'
import MensajePersonalizado from './exercises/ex01/MensajePersonalizado'
import Cabecera from './exercises/ex02/Cabecera';
import Tarjeta from './exercises/ex02/Tarjeta';

function App() {
	return (
		<>
		<h1>SHEET 02 REACT</h1>
		<div className='mensajePersonalizado'>
			<h2>1.- Mensaje Personalizado</h2>
			<MensajePersonalizado 
				texto="VIVA EL" 
				color="green"
			/>
			<MensajePersonalizado 
				texto="BETIS" 
				color="white"
			/>
			<MensajePersonalizado 
				texto="MANQUEPIERDA" 
				color="green"
			/>
		</div>
		<div>
			<h2>2.- Tarjetas de Composición</h2>
			<Tarjeta>
				<Cabecera>Información del Usuario</Cabecera>
				 <p>
                    Este es un ejemplo de composición en React. 
                    Estamos utilizando la prop <code>children</code> para 
                    anidar componentes y crear estructuras flexibles.
                </p>
			</Tarjeta>
			<Tarjeta>
                    <Cabecera>Documentación Requerida</Cabecera>
                    <ul>
                        <li>Modelo 036 ó 037</li>
                        <li>DNI o datos del administrador/es</li>
                        <li>Ayudas recibidas (2 años anteriores)</li>
                        <li>Certificado digital</li>
                        <li>Email y teléfono de contacto</li>
                    </ul>
                </Tarjeta>
		</div>
	</>

	);
}
export default App
