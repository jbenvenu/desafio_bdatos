import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Listado from './components/Listado';
import Formulario from './components/Formulario';



function App() {


  return (
    <>
    <div className='container'>
    <div className='containerform'>
      <h1 className='h1title'>Agregar Colaborador</h1>
      <Formulario/>
      </div>
      <div className='containerlist'>
      <Listado/>
      </div>
   
      </div>
    </>
  )
}

export default App