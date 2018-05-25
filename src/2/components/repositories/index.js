import React from 'react'
import Repo from './repo'

const Repositories = props => (
  <div className="section repositories">
    <Repo
      name="react"
      stars=" 74938"
      description="A declarative, efficient, and flexible JavaScript library for building user interfaces."
      url="https://github.com/facebook/react"
    />
    <Repo
      name="react-native"
      stars="53028"
      description="A framework for building native apps with React."
      url="https://github.com/facebook/react-native"
    />
    <Repo
      name="pop"
      stars="18103"
      description="An extensible iOS and OS X animation library, useful for physics-based interactions."
      url="https://github.com/facebook/pop"
    />
    <Repo
      name="fresco"
      stars="13369"
      description="An Android library for managing images and the memory they use."
      url="https://github.com/facebook/fresco"
    />
    <Repo
      name="jest"
      stars="11993"
      description="🃏 Delightful JavaScript Testing."
      url="https://github.com/facebook/jest"
    />
  </div>
)

export default Repositories
