import React from 'react'

import Header from './components/common/header'
import UserInfo from './components/user-info'
import UserForm from './components/user-form'
import Repositories from './components/repositories'
import State, { Consumer } from './state'
import './style.js'

const App = props => {
  return (
    <State initialData={props.initialData}>
      <Consumer>
        {({ data }) => (
          <div>
            <Header />
            <UserForm />
            {data.repos ? (
              <React.Fragment>
                <UserInfo />
                <Repositories />
              </React.Fragment>
            ) : null}
          </div>
        )}
      </Consumer>
    </State>
  )
}

export default App
