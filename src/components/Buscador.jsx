import React from 'react';

function Buscador({ onBuscar }) {
  return (
    <div className="bg-primary text-white p-4">
      <h2 className="mb-4">Buscar Colaborador</h2>
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