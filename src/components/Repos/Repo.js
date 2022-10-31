import React from "react";

const Repo = ({ repo }) =>(
    
    <div className="card card-header mb-2">
        <div className="row">
            <div className="col-md-6">
                <a>{repo.name} </a>
            </div>
            <div className="col-md-6 ">
                <button className="badge badge-primary">Stars: { repo.stargazers_count }</button>
                <button className="badge badge-secondary">Watch: { repo.watchers_count }</button>
                <button className="badge badge-sucess">Forks: { repo.forks_count }</button>
            </div>
        </div>
    </div>
    
)

export default Repo;