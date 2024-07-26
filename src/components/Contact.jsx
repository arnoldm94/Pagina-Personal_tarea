import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  //Seting the data (form)
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  //declaring initial state (again)
  const initialState = {
    name: "",
    email: "",
  };

  //function to delete the values
  const clearState = () => {
    setData({ ...initialState });
  };

  //event when press submit bottom
  const handleSubmit = (event) => {
    event.preventDefault();

    const userList = JSON.parse(localStorage.getItem("user")) || [];
    userList.push(data);
    localStorage.setItem("user", JSON.stringify(userList));
    clearState();
  };
  //event when is validated or no
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  //event when handles input changes
  const handleInputChange = (event) => {
    const validEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    //validador de email
    if (!validEmail.test(data.email)) {
      setMessage(
        "El campo de email no es valido, debe tener una estructura como esta: name@example.com"
      );
      setTimeout(() => {
        setMessage(null);
      }, "2000");
      setBtnDisabled(true);
    }
    //validador de nombre
    if (data.name.length + 1 < 3) {
      setMessage("El nombre debe contener al menos 3 caracteres!!");
      setTimeout(() => {
        setMessage(null);
      }, "2000");
      setBtnDisabled(true);
    }

    if (data.name.length + 1 > 2 && validEmail.test(data.email) && data.email.length !== 0) {
      setMessage(null);
      setBtnDisabled(false);
    }
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label labelform">Nombre:</label>
          <input
            type="text"
            className="form-control labelform"
            id="NombreUsuario"
            value={data.name}
            placeholder="Ingresa tu nombre aqui"
            name="name"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label labelform">Email:</label>
          <input
            type="email"
            className="form-control labelform"
            id="EmailUsuario"
            value={data.email}
            placeholder="name@example.com"
            onChange={handleInputChange}
            name="email"
          ></input>
          <br />
          <button type="submit" disabled={btnDisabled} className="labelform button">
            Enviar datos de formulario
          </button>

          <p id="colorMessage">{message}</p>
        </div>
      </form>
    </>
  );
};

export default Contact;

//localStorage.setItem("usuario", JSON.stringify(mi_objeto));
//JSON.parse(localStorage.getItem("usuario"));
