import React, { useState } from 'react';
import './App.css'
//import Formulario from './components/formulario'
 
 
const AnimalForm = ({ onAnimalSubmit }) => {
  const [fotoUrl, setFotoUrl] = useState('');
  const [raca, setRaca] = useState('');
  const [local, setLocal] = useState('');
  const [tipo, setTipo] = useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault();
    onAnimalSubmit({ fotoUrl, raca, local, tipo });
 
    setFotoUrl('');
    setRaca('');
    setLocal('');
    setTipo('');
  };
 
  return (
    <>
    <div className='app'>
      <h1>Cadastro de Animais Perdidos e Encontrados</h1>
    </div>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Url da foto:</label>
        <input type="text" value={fotoUrl} onChange={(e) => setFotoUrl(e.target.value)} required />
      </div>
      <div>
        <label>Raça:</label>
        <input type="text" value={raca} onChange={(e) => setRaca(e.target.value)} required />
      </div>
      <div>
        <label>Local (Encontrado/Perdido):</label>
        <input type="text" value={local} onChange={(e) => setLocal(e.target.value)} required />
      </div>
      <div>
        <label>Tipo (Perdido ou Resgatado):</label>
        <select value={tipo} onChange={(e) => setTipo(e.target.value)} required>
          <option value="">Selecione o tipo</option>
          <option value="perdido">Perdido</option>
          <option value="resgatado">Resgatado</option>
        </select>
      </div>
   
      <button type="submit">Cadastrar Animal</button>
    </form>
    </>
  );
};
 
export default AnimalForm;