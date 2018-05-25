import React from 'react'

import Header from './components/common/header'
import UserInfo from './components/user-info'
import UserForm from './components/user-form'
import Repositories from './components/repositories'
import { Consumer } from './state'

const App = () => {
  return (
    <Consumer>
      {({ data }) => (
        <div>
          <Header />
          <UserForm />
          {data.repos ? (
            <div>
              <UserInfo />
              <Repositories />
            </div>
          ) : null}
        </div>
      )}
    </Consumer>
  )
}

export default App
