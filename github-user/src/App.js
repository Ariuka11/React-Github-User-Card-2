
import React from 'react';
import axios from 'axios'

class App extends React.Component{

  state = {
    input: '',
    profile: {},
    username: 'ariuka11'
  }

  componentDidMount(){
    axios.get(`https://api.github.com/users/${this.state.username}`)
      .then(res => {
        console.log("Getting User info:", res)
        this.setState({
          ...this.state, 
          profile: res.data
        })
      })
      .catch(err => {
        console.log('Not successful:', err)
      })
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.username !== this.state.username){
      axios.get(`https://api.github.com/users/${this.state.username}`)
      .then(res => {
        console.log("Getting User info:", res)
        this.setState({
          ...this.state, 
          profile: res.data
        })
      })
      .catch(err => {
        console.log('Not successful:', err)
      })
    }
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      username : this.state.input,
    })
  }

  render(){
    return (
      <div>
        {this.state.profile.login}
        <form onSubmit = {e => this.handleSubmit(e)}>
          <input 
            type = 'text'
            name = 'input'
            placeholder = 'Search User'
            value = {this.state.input}
            onChange = {e => this.handleChange(e)}
          />
          <button>Search User</button>
        </form>
      </div>
    )
  }
}

export default App;
