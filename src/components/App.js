import React, { Component } from 'react'

import EmailField from './EmailField'
import NotEmptyField from './NotEmptyField'

import '../style.css'

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="card-title">Validation rules</h1>
        <NotEmptyField />
        <EmailField />
      </div>
    );
  }
}

export default App;