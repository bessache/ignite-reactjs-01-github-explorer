import { useState, useEffect } from "react";

import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';


//https://api.github.com/orgs/rocketseat/repos

const repository = {
    name: 'unform',
    description: 'forms in React',
    link: 'https://github.com/unform/unform'
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState([])

    useEffect(()=>{
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response =>response.json())
            .then(data => setRepositories(data))
    }, []);

    console.log(repositories);


    return (
        <section className="repository-list">
            <h1>Lista de Repositorio</h1>
            <ul>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
            </ul>
        </section>
    )
}