import React from 'react'
import Repo from './repo'

import { Consumer } from '../../state'

const Repositories = () => (
  <Consumer>
    {({ data }) => {
      const repos = data.repos
      return (
        <div className="section repositories">
          {repos.map((repo, index) => (
            <Repo
              key={repo.name}
              name={repo.name}
              url={repo.url}
              description={
                repo.description
              }
              stars={repo.stars}
            />
          ))}
        </div>
      )
    }}
  </Consumer>
)

export default Repositories
