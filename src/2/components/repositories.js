import React from 'react'

const Repositories = props => (
  <div className="section repositories">
    {props.repos.map(repo => {
      return (
        <div className="repo" key={repo.name}>
          <a className="name" href={repo.url}>
            {repo.name}
          </a>
          <div className="stars">{repo.stars}</div>
          <div className="clear" />
        </div>
      )
    })}
  </div>
)

export default Repositories
