import React from 'react'
import { Consumer } from '../../state'

const Avatar = () => (
  <Consumer>
    {({ data }) => <img className="avatar" src={data.avatar} alt="avatar" />}
  </Consumer>
)

export default Avatar
