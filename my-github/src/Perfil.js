import React from "react";
import Repo from './Repo';

const Perfil = ({ user }) =>(
    
    <div>
        <div className="row">
            <div className="col-md-4">
                <div className="card card-perfil">
                    <img className="card-img-top" src={user.avatar_url}/>
                    <h1>{user.name}</h1>
                    <p>{user.username}</p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            Repositórios: 
                            <span className="badge badge-sucess">{user.public_repos}</span>
                        </li>
                        <li className="list-group-item">
                            Seguidores: 
                            <span className="badge badge-primary">{user.followers}</span>
                        </li>
                        <li className="list-group-item">
                            Seguindo: 
                            <span className="badge badge-info">{user.following}</span>
                        </li>
                        <li className="list-group-item">
                        Stars: 
                            <span className="badge badge-sucess">{user.stars}</span>
                        </li>
                    </ul>
                    <div className="card-body">
                        <button className="button btn-block">
                            Ver Perfil
                        </button>
                    </div>
                </div>
            </div>

            <div className="col-md-8">
                <div className="card-header">
                    <Repo />
                </div>
            </div>

        </div>
    </div>
);

export default Perfil;
