import React from 'react'
import Repo from './repo'
import Loading from '../common/loading'

import { Consumer } from '../../state'

const fakeRepos = [[], [], [], [], []]

const Repositories = () => (
  <Consumer>
    {({ data }) => {
      const repos = data.repos || fakeRepos
      return (
        <div className="section repositories">
          {repos.map((repo, index) => (
            <Loading key={index} height="50px" empty={!repo.name}>
              <Repo
                key={repo.name}
                name={repo.name}
                url={repo.url}
                description={repo.description}
                stars={repo.stars}
              />
            </Loading>
          ))}
        </div>
      )
    }}
  </Consumer>
)

export default Repositories
