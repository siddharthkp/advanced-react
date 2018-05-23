import React from 'react'

const Logo = props => (
  <img src="logo.png" className={props.big ? 'big logo' : 'logo'} alt="logo" />
)

export default Logo
