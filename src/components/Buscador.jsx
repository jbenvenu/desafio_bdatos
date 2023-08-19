import React from 'react';

function Buscador({ onBuscar }) {
  return (
    <div>
      <div className='customh2'>
      <h2>Buscar Colaborador</h2>
      </div>
      <input
        type="text"
        className="form-control"
        placeholder="Busca un Colaborador"
        onChange={(e) => onBuscar(e.target.value)}
      />
    </div>
  );
}

export default Buscador;