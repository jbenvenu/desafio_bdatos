import React, {useState} from "react";
import "./styles/Form.css"

const Formulario =({setAlert}) => {
    const [nombre, setNombre] = useState ("");
    const [email, setEmail] = useState ("");
    const [edad, setEdad] = useState ("");
    const [cargo, setCargo] = useState ("");
    const [telefono, setTelefono] = useState ("");

const validarDatos =(e) => {
        e.preventDefault();

        if (
            nombre === "" ||
            email   === "" ||
            edad === "" ||
            cargo === "" ||
            telefono === ""
        ) {
            setAlert({
                msg:"Completa los campos !",
                color: "danger",
            });
            return;
        }

        setAlert({
         msg:"Cuenta creada exitosamente !",
         color : "success",
        });
        setNombre("");
        setEmail("");
        setEdad("");
        setCargo("");
        setTelefono("");
};

return (
    <>

    <div className="customformx">
        <form onSubmit={validarDatos}>
            <input className="custominput"
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre (e.target.value)}
                />
            <input className="custominput"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail (e.target.value)}
                />
            <input className="custominput"
                type="number"
                name="edad"
                placeholder="Edad"
                value={edad}
                onChange={(e) => setEdad (e.target.value)}
                />
            <input className="custominput"
                type="text"
                name="cargo"
                placeholder="Cargo"
                value={cargo}
                onChange={(e) => setCargo (e.target.value)}
                />    
            <input className="custominput"
                type="number"
                name="telefono"
                placeholder="Telefono"
                value={telefono}
                onChange={(e) => setTelefono (e.target.value)}
                />
                <div className="boxbutton">
                    <button className="custombuttonx" type="submit">Agregar Colaborador</button>
                </div>
        </form>

        </div>   
    </>
);   
};

export default Formulario;