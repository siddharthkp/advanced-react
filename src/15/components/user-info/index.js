import React from 'react'
import Description from './description'
import Avatar from './avatar'
import { Consumer } from '../../state'

const UserInfo = () => (
  <Consumer>
    {({ data }) => (
      <div className="section user-info">
        <Avatar />
        <br />
        <a className="name" href={data.url}>
          {data.name}
        </a>
        <Description />
      </div>
    )}
  </Consumer>
)

export default UserInfo
