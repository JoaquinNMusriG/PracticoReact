import "./App.css";
import React, { useState } from "react";

function App() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const response = await fetch('https://pruebas.free.beeceptor.com/test');
    const jsonData = await response.json();
    setData(jsonData);
  };

  return (
    <div className="App">
      <button onClick={fetchData}>Obtener datos</button>
      {data && (
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Género</th>
              <th>Edad</th>
              <th>Dirección</th>
              <th>Teléfono</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {data.firstName} {data.lastName}
              </td>
              <td>{data.gender}</td>
              <td>{data.age}</td>
              <td>
                <table>
                  <thead>
                    <tr>
                      <th>Calle</th>
                      <th>Ciudad</th>
                      <th>Estado</th>
                      <th>Código Postal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{data.address.streetAddress}</td>
                      <td>{data.address.city}</td>
                      <td>{data.address.state}</td>
                      <td>{data.address.postalCode}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>{data.phoneNumbers[0].number}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
