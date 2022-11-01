import React, { Component } from 'react';
import './dist/App.css';
import Header from './header';
import axios from 'axios';
import Perfil from './Perfil';
import Repo from './Repo';
require('dotenv').config();

class App extends Component {
  
  constructor() {
      super();
      this.state = {
        github: {
          url: "https://api.github.com/",
          count: 10,
          sort: "created: asc"
        },
        user: "https://api.github.com/users/",
        repos: "https://api.github.com/users/repos",
        starred: []
      };
    }
  

  getUser = (e) => {
      const user = e.target.value;

      const { url, repo, count, sort } = this.state.github;
        axios
          .get(`${url}/${user}?user=${user}&repo=${repo}`)
          .then(({ data }) => this.setState({ user: data }));
        axios
          .get(`${url}/${user}/repo?per_page=${count}&sort=${sort}`)
          .then(({ data }) => this.state({ repos: data }));
  };

  renderPerfil = () => {
    const { user, repos } = this.state;

    return (
      <div className="row">
        <div className="col-md-4">
          <Perfil user={user} />
        </div>
        <div className="col-md-9">
          {repos.map( repo => (<Repo key={repo.name} repo={repo} />))}
        </div>
      </div>
    );
  };

 
  render() {
    return(
      <div className="App">
        <h1>Bem-Vindo(a) ao Github! </h1>
        
        <Header />
        
        <div className="container">
          <div className="card card-body">
            <h2>Pesquise Usuário:</h2>
            <p className="lead"> Escreva o nome do usuário ou repositório.</p>
            <input type="text" id="search" className="input" onChange={this.getUser} />
            <button className="button"  onClick={this.getUser}>Pesquisar</button>
          </div>
          {this.state.user.length !== 0 ? this.renderPerfil() : null}
        </div>
      </div>
    );
  } 
}

export default App;
