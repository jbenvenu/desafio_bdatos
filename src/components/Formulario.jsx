import React, {useState} from "react";

const Formulario =({setAlert, onAgregarColaborador,contadorId}) => {
    const [nombre, setNombre] = useState ("");
    const [email, setEmail] = useState ("");
    const [edad, setEdad] = useState ("");
    const [cargo, setCargo] = useState ("");
    const [telefono, setTelefono] = useState ("");
    const validarDatos = (e) => {
        e.preventDefault();
    
        if (
            nombre === '' || 
            email === '' || 
            edad === '' || 
            cargo === '' || 
            telefono === '') {
          setAlert({
            msg: 'Completa los campos!',
            color: 'danger',
          });
          return;
        }
    
        onAgregarColaborador({
          id: contadorId.toString(),
          nombre,
          email,
          edad,
          cargo,
          telefono,
        });
    
        setAlert({
          msg: 'Colaborador agregado correctamente!',
          color: 'success',
        });
    
        setNombre('');
        setEmail('');
        setEdad('');
        setCargo('');
        setTelefono('');
      };
    
      return (
        <div className="custom-card">
          <div className="card-body">
            <h2 className="card-title">Agregar Colaborador</h2>
            <form onSubmit={validarDatos}>
              <div className="input-column">
                <input
                  className="custom-input"
                  type="text"
                  name="nombre"
                  placeholder="Nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
                <input
                  className="custom-input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="custom-input"
                  type="number"
                  name="edad"
                  placeholder="Edad"
                  value={edad}
                  onChange={(e) => setEdad(e.target.value)}
                />
                <input
                  className="custom-input"
                  type="text"
                  name="cargo"
                  placeholder="Cargo"
                  value={cargo}
                  onChange={(e) => setCargo(e.target.value)}
                />
                <input
                  className="custom-input"
                  type="number"
                  name="telefono"
                  placeholder="Telefono"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                />
              </div>
              <div className="d-grid">
                <button className="btn btn-primary" type="submit">
                  Agregar Colaborador
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    };

    export default Formulario;