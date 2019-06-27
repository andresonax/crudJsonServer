import React from 'react'
import Main from '../templates/Main'

export default props =>
    <Main icon="home" title="Início" 
        subtitle = "Segundo Projeto do Capítulo de React"
    >
        <div className="display-4">Bem vindo!</div>
        <hr />
        <p className="mb-0">Sistema para testes em React com cadastro de usuários, utilizando ainda json server</p>
    </Main>