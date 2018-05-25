import React from 'react'
import Description from './description'
import Avatar from './avatar'

const UserInfo = props => (
  <div className="section user-info">
    <Avatar avatar="https://avatars3.githubusercontent.com/u/69631?v=4" />
    <br />
    <a className="name" href="https://github.com/facebook">
      Facebook
    </a>
    <Description description="We work hard to contribute our work back to the web, mobile, big data, & infrastructure communities. NB: members must have two-factor auth." />
  </div>
)

export default UserInfo
