import React, { useState } from "react";
import api from './services/api';

import "./styles.css";

function App() {

  const [repositories, setRepositories] = useState([]); 

  async function handleAddRepository() {

    const response = await api.post('repositories', {
      title: `Repositório: ${ Date.now() }`,
      url: "http://github.com.br/users/saulossg",
      techs: ["NodeJS", "ReactJS", "React-Native"]
    })

    const repository = response.data;

    setRepositories([...repositories, repository]);
  }

  async function handleRemoveRepository(id) {
    // TODO
  }

  return (
    <div>
      <ul data-testid="repository-list">
      {repositories.map(repository => 
        <li key={repository.title}>
          { repository.title }
          <button onClick={() => handleRemoveRepository(1)}>
            Remover
          </button>
        </li>
      )}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
