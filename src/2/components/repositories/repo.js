import React from 'react'
import Description from './description'
import Stars from './stars'

const Repo = props => (
  <div className="repo">
    <a className="name" href={props.url}>
      {props.name}
    </a>
    <Stars className="stars" stars={props.stars} />
    <Description className="description">{props.description}</Description>
  </div>
)

export default Repo
