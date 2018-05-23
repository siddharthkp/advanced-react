import React from 'react'
import Description from './description'
import Avatar from './avatar'

const UserInfo = props => (
  <div className="section user-info">
    <Avatar src={props.data.avatar} />
    <a className="name" href={props.data.url}>
      {props.data.name}
    </a>
    <Description>{props.data.description}</Description>
  </div>
)

export default UserInfo
