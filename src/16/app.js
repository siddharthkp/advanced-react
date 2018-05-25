import React from 'react'

import Header from './components/common/header'
import UserInfo from './components/user-info'
import UserForm from './components/user-form'
import Repositories from './components/repositories'
import State, { Consumer } from './state'

// const { registerObserver } = require('react-perf-devtool')
// registerObserver()

// import { whyDidYouUpdate } from 'why-did-you-update'
// whyDidYouUpdate(React)

const App = props => {
  return (
    <State initialData={props.initialData}>
      <Consumer>
        {({ data }) => (
          <div>
            <Header />
            <UserForm />
            <UserInfo />
            <Repositories />
          </div>
        )}
      </Consumer>
    </State>
  )
}

export default App
