import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Listado from './components/Listado';
import Buscador from './components/Buscador';
import Formulario from './components/Formulario';
import { BaseColaboradores } from './components/BaseColaboradores';

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [busqueda, setBusqueda] = useState('');
  const [alert, setAlert] = useState(null);
  const [contadorId, setContadorId] = useState(BaseColaboradores.length + 1);

  const agregarColaborador = (nuevoColaborador) => {
    const nuevoColaboradorConId = {
      ...nuevoColaborador,
      id: contadorId.toString(),
    };

    setColaboradores([...colaboradores, nuevoColaborador]);
    setContadorId(contadorId + 1); 
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <Formulario onAgregarColaborador={agregarColaborador} setAlert={setAlert} contadorId={contadorId} setContadorId={setContadorId} />
          {alert && (
            <div className={`alert alert-${alert.color} mt-3`} role="alert">
              {alert.msg}
            </div>
          )}
        </div>
        <div className="col-md-6">
          <Buscador onBuscar={setBusqueda} />
          <Listado colaboradores={colaboradores} busqueda={busqueda} />
        </div>
      </div>
    </div>
  );
}

export default App;