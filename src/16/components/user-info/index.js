import React from 'react'
import Description from './description'
import Avatar from './avatar'
import Loading from '../common/loading'
import { Consumer } from '../../state'

const UserInfo = () => (
  <Consumer>
    {({ data }) => (
      <div className="section user-info">
        <Avatar />
        <br />
        <Loading empty={!data.name}>
          <a className="name" href={data.url}>
            {data.name}
          </a>
        </Loading>
        <Description />
      </div>
    )}
  </Consumer>
)

export default UserInfo
