
import React from 'react';
import axios from 'axios'

class App extends React.Component{

  state = {
    input: ''
  }

  componentDidMount(){
    axios.get(`https://api.github.com/users/ariuka11`)
      .then(res => {
        console.log("Getting User info:", res)
      })
      .catch(err => {
        console.log('Not successful:', err)
      })
  }

  render(){
    return (
      <div>
        Hi
      </div>
    )
  }
}

export default App;
