import React, {useState} from "react";

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

    <div>
        <form className="customform" onSubmit={validarDatos}>
            <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre (e.target.value)}
                />
            <input
                type="email"
                name="email"
                placeholder="tuemail@ejemplo.com"
                value={email}
                onChange={(e) => setEmail (e.target.value)}
                />
            <input
                type="number"
                name="edad"
                placeholder="Edad"
                value={edad}
                onChange={(e) => setEdad (e.target.value)}
                />
            <input
                type="text"
                name="cargo"
                placeholder="Cargo"
                value={cargo}
                onChange={(e) => setCargo (e.target.value)}
                />    
            <input
                type="number"
                name="telefono"
                placeholder="Telefono"
                value={telefono}
                onChange={(e) => setTelefono (e.target.value)}
                />
                <div>
                    <button className="custombuttoncf" type="submit">Agregar Colaborador</button>
                </div>
        </form>

        </div>   
    </>
);   
};

export default Formulario;