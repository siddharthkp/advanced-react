import React from 'react'
import Stars from './stars'

const Repo = props => (
  <div className="repo" key={props.name}>
    <a className="name" href={props.url}>
      {props.name}
    </a>
    <Stars className="stars" stars={props.stars} />
  </div>
)

export default Repo
