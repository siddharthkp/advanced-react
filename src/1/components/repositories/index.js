import React from 'react'
import Repo from './repo'

const Repositories = props => (
  <div className="section repositories">
    {props.data.repos.map(repo => (
      <Repo
        key={repo.name}
        name={repo.name}
        url={repo.url}
        stars={repo.stars}
      />
    ))}
  </div>
)

export default Repositories
