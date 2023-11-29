import React from 'react';
 
const ListaAnimais = ({ animais, onRemoverAnimal, onAlterarStatus }) => {
  return (
 <div>
 <h2>Lista de Animais Cadastrados</h2>
      {animais.length === 0 ? (
        <p>Nenhum animal cadastrado.</p>
      ) : (
        <ul>
          {animais.map((animal, index) => (
            <li key={index} style={{ marginBottom: '20px' }}>
              <h3>{animal.raca}</h3>
              <img src={animal.fotoUrl} alt={`Foto de ${animal.raca}`} style={{ maxWidth: '100%' }} />
              <p>
                <strong>Local:</strong> {animal.local}
              </p>
              <p>
                <strong>Tipo:</strong> {animal.tipo === 'perdido' ? 'Perdido' : 'Resgatado'}
              </p>
              <button onClick={() => onRemoverAnimal(index)}>Remover</button>
              <button onClick={() => onAlterarStatus(index)}>Alterar Status</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
 
export default ListaAnimais;