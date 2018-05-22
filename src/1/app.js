import React from 'react'
import Header from './components/header'
import UserInfo from './components/user-info'
import UserForm from './components/user-form'
import Repositories from './components/repositories'

const App = props => (
  <div>
    <Header />
    <UserForm />
    <UserInfo />
    <Repositories />
  </div>
)

export default App
