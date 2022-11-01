import React from "react";

const Repo = ({ repo }) =>(
    
    <div className="card card-header mb-2">
        <div className="row">
            <div className="col-md-6">
                <a>{repo.name} </a>
            </div>
            <div className="col-md-6 ">
                <button className="badge badge-primary">Stars: { Repo.stargazers_count }</button>
                <button className="badge badge-secondary">Watch: { Repo.watchers_count }</button>
                <button className="badge badge-sucess">Forks: { Repo.forks_count }</button>
            </div>
        </div>
    </div>
    
)

export default Repo;