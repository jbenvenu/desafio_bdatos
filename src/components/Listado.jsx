import React from 'react';
import Table from 'react-bootstrap/Table';

function Listado({ colaboradores, busqueda }) {
  // Filtrar colaboradores según el valor de búsqueda
  const colaboradoresFiltrados = colaboradores.filter((colaborador) =>
    colaborador.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Telefono</th>
          </tr>
        </thead>
        <tbody>
          {colaboradoresFiltrados.map((colaborador) => (
            <tr key={colaborador.id}>
              <td>{colaborador.id}</td>
              <td>{colaborador.nombre}</td>
              <td>{colaborador.correo}</td>
              <td>{colaborador.edad}</td>
              <td>{colaborador.cargo}</td>
              <td>{colaborador.telefono}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Listado;