import './App.css'
import Saludo from './exercises/ex01/Saludo'
import Composicion from './exercises/ex02/Composicion'
import Usuario from './exercises/ex03/Usuario'
import PanelLogin  from './exercises/ex04/PanelLogin'
import Listas from './exercises/ex05/Listas'
import ListaUsuarios from './exercises/ex06/ListaUsuarios'

function App() {
  
  const usuarios = [
    {id: 1, nombre: "Luis"},
    {id: 2, nombre: "Toni"},
    {id: 3, nombre: "Oussama"}
  ];

  const usuarios2 = [
    { id: 1, nombre: 'Luis', activo: true },
    { id: 2, nombre: 'Toni', activo: false },
    { id: 3, nombre: 'Oussama', activo: true }
  ];

  return (
    <main>
      <h1>Introducción a React</h1>
      <h1>EX01</h1>
      <Saludo nombre="Lomo Goldo"/>
      <Composicion />
      <Usuario nombre='Pedro' edad={22}/>
      <Usuario nombre='Paco' />
      <PanelLogin logueado={true}/>
      <PanelLogin logueado={false}/>
      <Listas usuarios={usuarios}/>
      <ListaUsuarios usuarios={usuarios2} />
    </main>
  );
}
export default App
