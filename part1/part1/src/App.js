import './App.css';
import Mensaje from './Mensaje.js'

function App() {
  

  const Descripcion = () => {
    return <p>Aplicación del curso fullStack de MiduDev</p>
  }

  return (
    <div className="App">
      <Mensaje color='red' msg='Trabajando'/>
      <Mensaje color='green' msg='en un curso'/>
      <Mensaje color='yellow' msg='sobre React'/>
      <Descripcion />
    </div>
  );
}

export default App;
