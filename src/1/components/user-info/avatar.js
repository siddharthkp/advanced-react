import React from 'react'
import { Consumer } from '../../context'

const Avatar = () => (
  <Consumer>
    {data => <img className="avatar" src={data.avatar} alt="avatar" />}
  </Consumer>
)

export default Avatar
